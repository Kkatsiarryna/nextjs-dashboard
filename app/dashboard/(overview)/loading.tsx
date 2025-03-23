//резервный пользовательский интерфейс для отображения в качестве замены во время загрузки содержимого страницы

import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
    return <DashboardSkeleton />;
}