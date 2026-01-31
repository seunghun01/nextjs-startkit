# 컴포넌트 생성

3계층 구조에 맞는 새 컴포넌트를 생성합니다.

## 입력 정보

- **컴포넌트 이름**: $ARGUMENTS (예: SearchBar, UserCard)

## 컴포넌트 계층

사용자에게 계층을 선택하도록 요청:

1. **ui/** - 재사용 가능한 UI 프리미티브 (Button, Card 스타일)
2. **layout/** - 레이아웃 관련 (Header, Footer, Sidebar)
3. **common/** - 공통 기능 컴포넌트 (Provider, Toggle 등)

## 컴포넌트 템플릿

### 서버 컴포넌트 (기본)

```tsx
import { cn } from "@/lib/utils";

interface [컴포넌트명]Props {
  className?: string;
  children?: React.ReactNode;
}

// [컴포넌트 설명]
export function [컴포넌트명]({ className, children }: [컴포넌트명]Props) {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
}
```

### 클라이언트 컴포넌트

```tsx
"use client";

import { cn } from "@/lib/utils";

interface [컴포넌트명]Props {
  className?: string;
  children?: React.ReactNode;
}

// [컴포넌트 설명]
export function [컴포넌트명]({ className, children }: [컴포넌트명]Props) {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
}
```

## 지침

1. 컴포넌트 이름이 없으면 사용자에게 물어봐주세요
2. 컴포넌트명은 PascalCase 사용
3. 파일명은 kebab-case 사용 (예: UserCard → user-card.tsx)
4. 계층 선택 후 해당 디렉토리에 생성
5. 클라이언트 컴포넌트 필요 여부 확인 (상태, 이벤트 핸들러 사용 시)
6. 인터페이스 props는 컴포넌트 용도에 맞게 조정
7. cn() 유틸리티로 className 병합
