import { useEffect, useState, Dispatch, SetStateAction } from "react";

declare global {
  // tslint:disable-next-line: interface-name
  interface Window {
    __ssr_data__: any;
  }
}

export function pluralize(value: number, label: string, plural?: string): string {
  return value + " " + (value === 1 ? label : plural || label + "s");
}

export function list_to_english(list: string[]): string {
  if (list.length === 1) {
    return list[0];
  } else {
    const a = list.slice(0, -2);
    const b = list.slice(-2);
    return a.join(", ") + ", " + b.join(", and ");
  }
}

export function useAsyncData<T>(
  props: any,
  fetcher: (ctx: any) => Promise<T>
): { data?: T; loading: boolean } {
  let data: T | undefined;
  let loading: boolean = false;

  if (typeof window !== "undefined") {
    if (window.__ssr_data__) {
      data = window.__ssr_data__;
      delete window.__ssr_data__;
    } else {
      let setData: Dispatch<SetStateAction<any>>;
      let setLoading: Dispatch<SetStateAction<any>>;
      [data, setData] = useState<T | undefined>(undefined);
      [loading, setLoading] = useState<boolean>(false);
      useEffect(() => {
        fetcher({ mode: "browser" }).then((res) => {
          setData(res);
          setLoading(false);
        });
      }, []);
    }
  } else {
    data = props.staticContext;
  }
  return { data, loading };
}
