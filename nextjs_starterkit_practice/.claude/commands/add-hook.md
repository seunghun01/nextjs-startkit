# 커스텀 훅 생성

기존 훅 패턴을 따르는 커스텀 훅을 생성합니다.

## 입력 정보

- **훅 이름**: $ARGUMENTS (예: scroll, debounce, localStorage)

## 훅 템플릿

```tsx
"use client";

import { useState, useEffect } from "react";

// [훅 설명]
export function use[훅이름]() {
  // 상태 및 로직 구현

  return {
    // 반환값
  };
}
```

## 기존 훅 패턴 참고

### useMounted 패턴
```tsx
"use client";

import { useState, useEffect } from "react";

// 하이드레이션 완료 여부 확인
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
```

### useMediaQuery 패턴
```tsx
"use client";

import { useState, useEffect } from "react";

// 미디어 쿼리 매칭 확인
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
```

## 지침

1. 훅 이름이 없으면 사용자에게 물어봐주세요
2. 파일명: `hooks/use-[이름].ts` (kebab-case)
3. 함수명: `use[이름]` (camelCase, use 접두사 필수)
4. 반드시 "use client" 지시문 포함
5. 훅의 목적과 사용법을 주석으로 설명
6. 필요한 React 훅 import
7. 타입 안전성을 위한 제네릭 사용 고려
