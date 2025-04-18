import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      // 获取当前滚动位置
      const scrollPosition = window.scrollY + offset;
      
      // 查找当前在视图中的节
      const current = sectionIds
        .map(id => {
          const element = document.getElementById(id);
          if (!element) return { id, top: -1, bottom: -1 };
          
          const rect = element.getBoundingClientRect();
          return {
            id,
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY
          };
        })
        .find(section => {
          return scrollPosition >= section.top && scrollPosition < section.bottom;
        });
      
      // 如果找到匹配的节，则更新活动节
      if (current) {
        setActiveSection(current.id);
      } else if (window.scrollY <= 10) {
        // 如果在顶部，设置为第一个部分
        setActiveSection(sectionIds[0]);
      } else if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 10) {
        // 如果在底部，设置为最后一个部分
        setActiveSection(sectionIds[sectionIds.length - 1]);
      }
    };

    // 添加滚动事件监听器
    window.addEventListener('scroll', handleScroll, { passive: true });
    // 初始触发一次，确保初始状态正确
    handleScroll();

    // 清理函数
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
} 