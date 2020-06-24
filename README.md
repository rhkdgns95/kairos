# kairos
- CMS Project.

## Directory structure
```
.
│
├── .cache  # 개발 작업시 빠른 실행을 위한 캐시 파일.
├── build   # 프로덕션 모드 실행 파일들을 담당.
├── dist    # 개발 모드 실행 파일들을 담당.
├── .github # [예정] github actions.
├── public  # static한 파일들을 관리.
│   └── index.html  # 렌더링 될 html 파일.
├── src
│   ├── index.tsx   # 앱 최상위 root파일.
│   └── App.tsx     # 앱 인증 라우터 관리.
│
```

## Command
```bash
yarn cleanup  # cache, dist파일 제거.
yarn dev  # 앱 개발모드 빌드.
```