/**
 * 页面刷新处理器
 * 防止页面刷新时导致的服务器连接问题
 */

let isRefreshing = false;
let refreshTimeout: NodeJS.Timeout | null = null;

export class RefreshHandler {
  private static instance: RefreshHandler;
  private beforeUnloadHandler: ((event: BeforeUnloadEvent) => void) | null = null;
  private visibilityChangeHandler: (() => void) | null = null;
  private isInitialized = false;

  public static getInstance(): RefreshHandler {
    if (!RefreshHandler.instance) {
      RefreshHandler.instance = new RefreshHandler();
    }
    return RefreshHandler.instance;
  }

  public init(): void {
    if (this.isInitialized || typeof window === 'undefined') {
      return;
    }

    this.setupEventListeners();
    this.isInitialized = true;
    console.log('🔄 页面刷新处理器已初始化');
  }

  private setupEventListeners(): void {
    // 处理页面卸载前事件
    this.beforeUnloadHandler = (event: BeforeUnloadEvent) => {
      this.handleBeforeUnload(event);
    };

    // 处理页面可见性变化
    this.visibilityChangeHandler = () => {
      this.handleVisibilityChange();
    };

    // 添加事件监听器
    window.addEventListener('beforeunload', this.beforeUnloadHandler);
    document.addEventListener('visibilitychange', this.visibilityChangeHandler);

    // 处理页面加载完成
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.handlePageLoad();
      });
    } else {
      this.handlePageLoad();
    }
  }

  private handleBeforeUnload(event: BeforeUnloadEvent): void {
    if (isRefreshing) {
      return;
    }

    isRefreshing = true;
    console.log('🔄 检测到页面即将刷新/离开');

    // 清理任何现有的超时
    if (refreshTimeout) {
      clearTimeout(refreshTimeout);
    }

    // 设置一个短暂的延迟来区分刷新和关闭
    refreshTimeout = setTimeout(() => {
      isRefreshing = false;
    }, 2000);

    // 不显示确认对话框，让刷新正常进行
    // 这里不设置 event.returnValue 来避免阻止刷新
  }

  private handleVisibilityChange(): void {
    if (document.hidden) {
      console.log('📵 页面变为不可见');
      // 页面变为不可见时减少活动
      this.pauseBackgroundActivities();
    } else {
      console.log('👁️ 页面变为可见');
      // 页面变为可见时恢复活动
      this.resumeBackgroundActivities();
    }
  }

  private handlePageLoad(): void {
    console.log('✅ 页面加载完成');

    // 重置刷新状态
    isRefreshing = false;

    // 清理任何现有的超时
    if (refreshTimeout) {
      clearTimeout(refreshTimeout);
      refreshTimeout = null;
    }

    // 检查是否是刷新后的页面
    if (performance.navigation.type === 1) {
      console.log('🔄 检测到页面刷新');
      this.handleAfterRefresh();
    }
  }

  private handleAfterRefresh(): void {
    // 页面刷新后的处理逻辑
    console.log('🛠️ 执行刷新后处理...');

    // 延迟执行一些操作，确保服务器连接稳定
    setTimeout(() => {
      // 可以在这里添加一些重新连接或状态恢复的逻辑
      console.log('✅ 刷新后处理完成');
    }, 500);
  }

  private pauseBackgroundActivities(): void {
    // 暂停一些后台活动以减少服务器负载
    // 例如：暂停定时器、WebSocket连接等
  }

  private resumeBackgroundActivities(): void {
    // 恢复后台活动
    // 例如：恢复定时器、重新连接WebSocket等
  }

  public destroy(): void {
    if (!this.isInitialized) {
      return;
    }

    // 移除事件监听器
    if (this.beforeUnloadHandler) {
      window.removeEventListener('beforeunload', this.beforeUnloadHandler);
      this.beforeUnloadHandler = null;
    }

    if (this.visibilityChangeHandler) {
      document.removeEventListener('visibilitychange', this.visibilityChangeHandler);
      this.visibilityChangeHandler = null;
    }

    // 清理超时
    if (refreshTimeout) {
      clearTimeout(refreshTimeout);
      refreshTimeout = null;
    }

    this.isInitialized = false;
    console.log('🗑️ 页面刷新处理器已销毁');
  }
}

// 自动初始化处理器
if (typeof window !== 'undefined') {
  // 确保在客户端环境中初始化
  const handler = RefreshHandler.getInstance();

  // 在下一个事件循环中初始化，确保DOM准备就绪
  setTimeout(() => {
    handler.init();
  }, 0);
}

export default RefreshHandler;
