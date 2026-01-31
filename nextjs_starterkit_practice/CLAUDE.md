# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 빌드 및 개발 명령어

```bash
npm run dev      # 개발 서버 실행 (Next.js)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 실행
```

## 아키텍처 개요

### 프레임워크 스택
- **Next.js 16** App Router 사용 (Pages Router 아님)
- **React 19** 서버 컴포넌트 기본 활성화
- **TypeScript 5** strict 모드 적용
- **Tailwind CSS 4** CSS 변수 기반 테마 시스템

### 경로 별칭
`@/*`는 프로젝트 루트 디렉토리를 가리킴 (tsconfig.json에서 설정)

### 컴포넌트 아키텍처

**3계층 컴포넌트 구조:**
1. **`components/ui/`** - shadcn/ui 기본 컴포넌트 (Button, Card, Input, Sheet 등), Radix UI 프리미티브 사용
2. **`components/layout/`** - 레이아웃 컴포넌트 (Header, Footer, Container)
3. **`components/common/`** - 공통 기능 컴포넌트 (ThemeProvider, ThemeToggle)

**shadcn/ui 설정** (components.json):
- 스타일: "new-york"
- 아이콘 라이브러리: lucide-react
- CSS 변수 활성화

### 스타일링 패턴
- `@/lib/utils`의 `cn()` 유틸리티로 Tailwind 클래스 병합 (충돌 자동 처리)
- next-themes의 `class` 전략으로 다크 모드 구현
- 색상 토큰은 CSS 변수에서 oklch 색상 공간 사용
- 모바일 우선 반응형 디자인

### 커스텀 훅
- `useMounted()` - 하이드레이션 완료 후 true 반환 (SSR/클라이언트 불일치 방지)
- `useMediaQuery()` - 반응형 미디어 쿼리 매칭

### 타입 정의
공유 TypeScript 인터페이스는 `types/index.ts`에 위치
