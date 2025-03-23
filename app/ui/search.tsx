'use client';
//Это клиентский компонент, что означает, что вы можете использовать прослушиватели событий и хуки.

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams,usePathname, useRouter  } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
            handleSearch(e.target.value);
        }}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}


// useSearchParams- Позволяет получить доступ к параметрам текущего URL.
//     Например, параметры поиска для этого URL /dashboard/invoices?page=1&query=pending
//     будут выглядеть так: {page: '1', query: 'pending'}.

// URLSearchParams— это веб-API, предоставляющий методы утилит для манипулирования параметрами запроса URL.

// usePathname- Позволяет прочитать путь текущего URL.
//     Например, для маршрута /dashboard/invoices, usePathnameвернет '/dashboard/invoices'.
// useRouter- Позволяет осуществлять навигацию между маршрутами в клиентских компонентах программным способом.
//     Существует несколько методов, которые вы можете использовать.