# 타입 정의 추가

`types/index.ts`에 새 인터페이스/타입을 추가합니다.

## 입력 정보

- **타입 이름**: $ARGUMENTS (예: User, Product, ApiResponse)

## 타입 템플릿

### 인터페이스

```typescript
// [타입 설명]
export interface [타입명] {
  id: string;
  // 필드 정의
}
```

### 타입 별칭

```typescript
// [타입 설명]
export type [타입명] = {
  // 필드 정의
};
```

### 유니온 타입

```typescript
// [타입 설명]
export type [타입명] = "option1" | "option2" | "option3";
```

### 제네릭 타입

```typescript
// API 응답 래퍼
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
```

## 자주 사용되는 타입 패턴

```typescript
// 페이지네이션
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// 폼 상태
export interface FormState {
  isSubmitting: boolean;
  isValid: boolean;
  errors: Record<string, string>;
}

// API 에러
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}
```

## 지침

1. 타입 이름이 없으면 사용자에게 물어봐주세요
2. 먼저 `types/index.ts` 파일 내용 확인
3. 기존 타입과 중복 여부 확인
4. 타입명은 PascalCase 사용
5. 각 타입에 한국어 주석으로 설명 추가
6. 관련 타입이 있으면 그룹화
7. export 되었는지 확인
