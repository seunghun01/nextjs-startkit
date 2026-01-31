# shadcn/ui 컴포넌트 추가

shadcn/ui 컴포넌트를 설치하고 프로젝트에 맞게 설정합니다.

## 입력 정보

- **컴포넌트 이름**: $ARGUMENTS (예: dialog, dropdown-menu, tabs)

## 설치 명령어

```bash
npx shadcn@latest add [컴포넌트명]
```

## 주요 컴포넌트 목록

### 폼 관련
- `button` - 버튼
- `input` - 입력 필드
- `textarea` - 텍스트 영역
- `checkbox` - 체크박스
- `radio-group` - 라디오 버튼 그룹
- `select` - 선택 드롭다운
- `switch` - 토글 스위치
- `form` - 폼 (react-hook-form 통합)

### 레이아웃/네비게이션
- `card` - 카드
- `sheet` - 사이드 시트
- `dialog` - 모달 다이얼로그
- `tabs` - 탭
- `accordion` - 아코디언
- `navigation-menu` - 네비게이션 메뉴
- `breadcrumb` - 브레드크럼

### 피드백
- `alert` - 알림
- `alert-dialog` - 확인 다이얼로그
- `toast` - 토스트 알림
- `skeleton` - 로딩 스켈레톤
- `progress` - 진행률 표시

### 데이터 표시
- `table` - 테이블
- `badge` - 배지
- `avatar` - 아바타
- `tooltip` - 툴팁

## 지침

1. 컴포넌트 이름이 없으면 필요한 컴포넌트를 물어봐주세요
2. `npx shadcn@latest add [컴포넌트]` 명령 실행
3. 설치 후 `components/ui/` 에 생성된 파일 확인
4. 필요시 한국어 주석 추가
5. 프로젝트 스타일에 맞게 기본 스타일 조정 제안
6. 사용 예시 코드 제공
