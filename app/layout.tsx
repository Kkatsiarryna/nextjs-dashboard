import '@/app/ui/global.css'
import {inter} from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('hello from app/layout')
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

// RootLayout: Это компонент, экспортируемый по умолчанию,
//     который будет использоваться в качестве корневого макета.
//
//     children: Это React.ReactNode, что означает,
//     что этот компонент может принимать любые дочерние элементы (HTML, JSX или другие React-компоненты).

// React.ReactNode — это тип, определяемый в библиотеке React,
//     который описывает всё, что может быть рендерено в компоненте.
//     Это один из самых универсальных типов, используемых в React,
//     поскольку он охватывает практически все возможные значения,
//     которые могут быть переданы для отображения в JSX