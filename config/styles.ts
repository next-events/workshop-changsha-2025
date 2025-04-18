export type StyleConfig = typeof styleConfig;

export const styleConfig = {
  // 颜色设置
  colors: {
    primary: 'primary',
    title: '#002E62',
    accent: 'blue',
    success: 'green',
    warning: 'yellow',
    danger: 'red',
  },
  
  // 标题样式
  titleStyles: {
    main: { color: 'violet' as const, class: '' },
    section: { color: 'violet' as const, class: '' },
  },
  
  // 边框和卡片样式
  card: {
    default: 'max-w-3xl mt-8 rounded-lg p-6',
    borderless: 'max-w-3xl mt-8 rounded-lg p-6',
  },
  
  // 布局和间距
  layout: {
    section: 'flex flex-col items-center justify-center gap-4 py-8 md:py-10',
    container: 'max-w-3xl',
  },
  
  // 按钮样式
  button: {
    primary: {
      color: 'primary' as const,
      radius: 'md' as const,
      variant: 'flat' as const,
    },
    secondary: {
      variant: 'bordered' as const,
      radius: 'full' as const,
    },
    large: {
      size: 'lg' as const,
    },
    small: {
      size: 'sm' as const,
    },
  },
}; 