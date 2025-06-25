import React from 'react';
import { searchAirlines } from '@/lib/airline-search';

export default function AirlinePreviewPanel() {
  const airlines = searchAirlines('香港');

  return (
    <div className="w-full max-w-lg mx-auto mt-10 border rounded-lg shadow-lg bg-white">
      {/* Tab栏 */}
      <div className="flex border-b">
        <button className="flex-1 px-4 py-3 text-sm font-medium bg-blue-500 text-white border-blue-500">航司</button>
      </div>
      
      {/* 统计信息行 */}
      <div className="px-4 py-2 bg-blue-50 border-b border-blue-100 text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-blue-700 font-medium">香港 • 显示 {airlines.length}/{airlines.length} 家航司</span>
          </div>
          <div className="flex items-center space-x-4 text-blue-600 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>IATA</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span>非IATA</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>IATA CODE</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>Prefix 提单号</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>枢纽机场</span>
            </div>
          </div>
        </div>
      </div>

      {/* 航司列表 */}
      {airlines.map((airline) => (
        <div
          key={airline.code}
          className="px-4 py-3 cursor-pointer border-b border-gray-100 hover:bg-blue-50 transition-colors"
        >
          <div className="flex items-center space-x-2">
            {/* IATA/非IATA 标识点 */}
            <div className="flex items-center space-x-1">
              <div className={`w-2 h-2 ${airline.isIata ? 'bg-blue-500' : 'bg-gray-400'} rounded-full`}></div>
            </div>
            
            {/* IATA CODE + Prefix + 航司名称 */}
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              {/* IATA CODE */}
              <div className="flex items-center space-x-1">
                <span className="font-mono font-bold text-blue-600 text-sm">
                  {airline.code}
                </span>
              </div>
              {/* Prefix 提单号 */}
              <div className="text-center min-w-[50px]">
                <span className="font-mono font-semibold text-orange-600 text-sm">
                  {airline.prefix}
                </span>
              </div>
              {/* 中英文名称 + 枢纽 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 overflow-hidden">
                  <span className="text-sm font-medium text-gray-900 whitespace-nowrap">
                    {airline.name.chinese}
                  </span>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    {airline.name.english}
                  </span>
                  {/* 枢纽信息 */}
                  {airline.hub && airline.hub.length > 0 && (
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      枢纽: <span className="font-mono">{airline.hub.join(', ')}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* 国家信息 */}
            <div className="text-xs text-gray-400 text-right w-[80px]">
              {airline.country}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 