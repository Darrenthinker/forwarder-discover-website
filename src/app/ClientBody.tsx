"use client";

import { useEffect } from "react";
import { RefreshHandler } from "@/lib/refresh-handler";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";

    // 初始化刷新处理器
    const handler = RefreshHandler.getInstance();
    handler.init();

    // 清理函数
    return () => {
      handler.destroy();
    };
  }, []);

  return <div className="antialiased">{children}</div>;
}
