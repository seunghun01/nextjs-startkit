# 새 페이지 생성

App Router 구조에 맞는 새 페이지를 생성합니다.

## 입력 정보

- **페이지 경로**: $ARGUMENTS (예: about, dashboard/settings)

## 생성 작업

1. `app/[페이지경로]/page.tsx` 파일 생성
2. 필요시 추가 파일 생성 여부 확인:
   - `layout.tsx` - 페이지 전용 레이아웃
   - `loading.tsx` - 로딩 UI
   - `error.tsx` - 에러 바운더리

## 페이지 템플릿

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "[페이지 제목]",
  description: "[페이지 설명]",
};

export default function [페이지명]Page() {
  return (
    <main className="container py-8">
      <h1 className="text-3xl font-bold">[페이지 제목]</h1>
    </main>
  );
}
```

## 지침

1. 페이지 경로가 없으면 사용자에게 물어봐주세요
2. 페이지명은 PascalCase로 변환 (예: about → About, dashboard/settings → DashboardSettings)
3. 메타데이터의 title과 description은 사용자에게 확인
4. 추가 파일(layout, loading, error) 필요 여부 확인
5. 생성 후 파일 위치 안내
