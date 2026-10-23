# OOO 연구실 홈페이지

OO대학교 OOO 교수 연구실 홈페이지. (공개 전 임시로 이름·학교명을 가려 두었다) 한국어(`/`)와 영어(`/en/`)를 함께 제공한다.

- 만든 방식: **Jekyll + GitHub Pages** (대학 연구실 사이트에서 가장 많이 쓰는 방식)
- 주소(배포 후): https://ych830.github.io/kwon-lab/
- 내용은 전부 `_data/` 폴더의 글 파일(.yml)에 있다. **GitHub 웹사이트에서 이 파일만 고치면 1~2분 뒤 사이트에 반영된다.** 프로그램 설치는 필요 없다.

> 지금 들어 있는 사진·구성원·논문·소식·연구 분야는 화면 확인용 **예시**다. 노랑·검정 도형 그림은 "사진 자리"를 보여 주는 예시 그림이다. 실제 내용으로 바꾼 뒤 `_data/lab.yml` 의 `draft: true` 를 `false` 로 바꾸면 맨 위 "예시입니다" 띠가 사라진다.

## 무엇을 고치려면 어느 파일을

| 바꿀 것 | 파일 |
|---|---|
| 연구실 이름, 소개 문구, 연락처, 주소, 모집 여부 | `_data/lab.yml` |
| 교수님 소개(학력·경력·링크) | `_data/professor.yml` |
| 학생·졸업생 | `_data/members.yml` |
| 논문 | `_data/publications.yml` |
| 소식 (사진 포함) | `_data/news.yml` |
| 갤러리 사진 | `_data/gallery.yml` |
| 연구 분야(그림 포함), 연구 과제 | `_data/research.yml` |
| 학생 모집 페이지 | `_data/join.yml` |
| 메뉴 이름·버튼 글자 | `_data/i18n.yml` |
| 홈 첫 화면 큰 사진과 설명 | `_data/lab.yml` 의 `hero_image`, `hero_caption` |
| 색깔 | `assets/css/site.css` 맨 위 `:root` (Figma 의 '색' 변수와 이름이 같다) |

각 파일 맨 위에 쓰는 법이 적혀 있다. `ko:` 아래는 한국어 화면, `en:` 아래는 영어 화면에 나온다.

## GitHub 웹에서 고치는 법

1. GitHub 에서 이 저장소를 연다 → 고칠 파일(예: `_data/news.yml`)을 누른다.
2. 오른쪽 위 **연필 아이콘(Edit this file)** 을 누른다.
3. 고친다. 새 항목은 기존 항목 한 덩어리를 복사해 붙이고 내용만 바꾸면 된다.
4. 오른쪽 위 **Commit changes...** → 다시 **Commit changes** 를 누른다.
5. 1~2분 뒤 사이트를 새로 고침하면 반영돼 있다. (저장소 **Actions** 탭에서 진행 상황을 볼 수 있다.)

### 예: 소식 하나 추가

`_data/news.yml` 맨 위에 붙인다.

```yaml
- date: 2026-11-01
  ko: 홍길동 학생이 박사학위를 받았습니다.
  en: Gildong Hong received his Ph.D.
  link: ""
```

### 사진 올리기

1. 저장소에서 아래 표의 폴더로 들어간다.
2. **Add file → Upload files** 로 사진을 끌어다 놓고 **Commit changes**.
3. 표의 데이터 파일에서 그 항목의 사진 칸에 올린 파일 이름을 적는다 (예: `image: 2026-conference.jpg`).

| 어디에 나오나 | 올릴 폴더 | 적을 곳 | 잘 맞는 비율 |
|---|---|---|---|
| 홈 첫 화면 큰 사진 (교수님 발표 등) | `assets/img/` | `_data/lab.yml` → `hero_image` | 가로 16:9, 가로 1920px 이상 |
| 갤러리 (홈 사진 띠에도 최근 8장) | `assets/img/gallery/` | `_data/gallery.yml` → `image` | 정사각형 |
| 소식 | `assets/img/news/` | `_data/news.yml` → `image` | 가로 16:10 |
| 연구 분야 | `assets/img/research/` | `_data/research.yml` → `image` | 가로 4:3 |
| 구성원 | `assets/img/people/` | `_data/members.yml`·`professor.yml` → `photo` | 학생 정사각형, 교수님 세로 4:5 |

- 구성원 사진은 흑백으로 보이다가 마우스를 올리면 컬러로 바뀐다.
- 사진 칸을 비우면 노란 "사진 자리"(구성원은 이름 글자)가 나온다. 소식은 사진이 없으면 노란 날짜 칸이 나온다.
- 예시 그림(`sample-*.svg`)은 실제 사진으로 바꾼 뒤 지워도 된다.

### 논문 PDF 올리기

`assets/papers/` 폴더에 PDF 를 올리고, 논문 항목에 `pdf: assets/papers/파일이름.pdf` 로 적는다. 바깥 링크(arXiv 등)면 주소를 그대로 적는다.

### 고칠 때 주의 (YAML 형식)

- 들여쓰기는 **띄어쓰기**로 한다(탭 금지). 위아래 항목과 칸을 맞춘다.
- `이름: 값` 에서 콜론 뒤에 한 칸 띄운다.
- 값 안에 `: ` 나 `#` 이 들어가면 큰따옴표로 감싼다. 예: `title: "AI: A New Approach"`
- 저장 후 사이트가 안 바뀌면 **Actions** 탭에서 빨간 X 를 눌러 오류 줄을 확인한다. 대부분 들여쓰기 문제다.

## 디자인 (Figma)

디자인 시안: [Figma — 연구실 홈페이지](https://www.figma.com/design/P7b1HlNAHwb4cOlHe0PqOQ)

- 한 장(페이지)에 7개 화면이 열로 놓여 있다. 열마다 위가 데스크톱(1440), 아래가 모바일(390).
- 모든 색은 **로컬 변수 '색'** 에 연결돼 있다(`brand` 노랑, `ink` 검정, `muted` 등 — `site.css` 의 `:root` 와 같은 이름). `brand` 값 하나를 바꾸면 14개 화면의 대표 색이 한꺼번에 바뀐다.
- 영어 큰 제목은 **Montserrat**(사이트와 같음), 한글은 **Inter** 로 되어 있다. 사이트 한글은 Pretendard 인데, Pretendard 의 영문이 Inter 이고 한글은 Figma 기본 한글 글꼴과 거의 같아서 보이는 모양이 비슷하다. 내 컴퓨터에 Pretendard 를 설치하면 Figma 에서 글꼴을 바꿀 수 있다.
- Figma 는 한국어를 글자 단위로 줄바꿈해서 문단 일부가 단어 중간에서 줄이 바뀐다. 실제 사이트는 단어 단위로 바뀐다.
- Figma 를 고쳐도 사이트는 자동으로 바뀌지 않는다. 고친 화면 링크를 주고 반영해 달라고 하면 코드에 옮긴다.

## 처음 한 번: 사이트 공개 설정

1. 저장소 **Settings → Pages** 로 간다.
2. **Build and deployment → Source** 를 **Deploy from a branch**, Branch 를 **main / (root)** 로 고르고 **Save**.
3. 몇 분 뒤 https://ych830.github.io/kwon-lab/ 에서 열린다.

**현재 상태 (2026-10-23):** 이 저장소는 공개(public)이고 Pages 가 켜져 있다. GitHub 무료 계정은 공개 저장소에서만 Pages 를 쓸 수 있기 때문이다. 공개 전까지의 작업 기록은 비공개 저장소 `ych830/kwon-lab-backup` 에 그대로 있다.

**예시 기간:** `_data/lab.yml` 의 `draft: true` 동안은 모든 페이지에 검색 차단 표시(noindex)가 붙는다. 실제 내용으로 바꾸고 `draft: false` 로 하면 검색에 나온다.

### 학교 주소(독자 도메인)를 쓰려면

학교 전산팀에서 도메인(예: `lab.university.ac.kr`)을 받아 Settings → Pages → Custom domain 에 넣고, `_config.yml` 의 `baseurl` 을 `""` 로 바꾼다.

## 내 컴퓨터에서 미리 보기 (선택)

내용만 고칠 때는 필요 없다. 디자인(틀)을 고칠 때만 쓴다.

```bash
# Ruby 3.3 (Windows: RubyInstaller "Ruby+Devkit") 설치 후, 이 폴더에서 처음 한 번
bundle config set --local path vendor/bundle
bundle install
# 미리 보기 서버 (http://localhost:4000/kwon-lab/)
bundle exec jekyll serve --livereload
```

## 폴더 구조

```
_config.yml        사이트 설정 (주소, baseurl)
_data/             ← 내용은 전부 여기
_layouts/          페이지 틀 (home, research, people, publications, news, gallery, join)
_includes/         공통 조각 (머리말, 바닥글, 논문 한 줄, 사진 등)
assets/css/site.css   디자인
assets/js/main.js     모바일 메뉴, 작은 로고 표시, 논문 종류 거르기
assets/img/        사진·그림
*.html, en/*.html  한국어·영어 페이지 (틀 이름만 적힌 짧은 파일)
```

틀을 고치는 사람을 위한 메모:

- CSS 파일 이름을 `style.css` 로 바꾸지 말 것. GitHub Pages 기본 테마가 같은 이름의 파일을 만들어 덮어쓴다.
- Liquid 에서 빈 값 검사는 `!= blank` 가 아니라 `x and x != ""` 로 쓴다. GitHub Pages 의 Jekyll 에서는 `blank` 비교가 항상 참이 된다.
- 페이지를 새로 만들면 한국어·영어 두 파일에 같은 `ref` 를 주면 언어 전환 버튼이 서로를 찾아간다.
- 모든 구역은 12칸 격자(`.grid`, `--gutter`)에 맞춘다. 새 구역도 `grid-column` 으로 같은 세로선에 놓아야 정렬이 어긋나지 않는다.
- `{% include %}` 인자에는 `g[lang]` 처럼 대괄호를 쓸 수 없다. 먼저 `assign` 한 변수를 넘긴다.

## 참고한 사이트 (2026-10 조사)

- 전체 분위기(노랑·검정 대표 색, 가운데 로고·메뉴, 세로선, 틈 없는 사진 격자, 흑백 구성원 사진): [주식회사 일레븐](https://www.11eleven.co.kr/)

- 메뉴 구성(연구·구성원·논문·소식·모집): [연세대 CV Lab](https://cvlab.yonsei.ac.kr/), [KAIST MLI](https://mli.kaist.ac.kr/), [UC Berkeley RAIL](https://rail.eecs.berkeley.edu/)
- 첫 화면(큰 소개 문구 + 연구 분야 + 소식 + 모집 버튼): [KAIST SAIL](https://sailab.kaist.ac.kr/)
- 구성원 사진 카드·과정별 구분·졸업생 분리: [KAIST MLML](https://mlml.kaist.ac.kr/people)
- 논문 국제/국내 구분: [서울대 CV Lab](https://cv.snu.ac.kr/)
- 연구 분야 카드형 배치: [ETH CVG](https://cvg.ethz.ch/)
- 모집 안내를 메인에 띄우기: [건국대 DCVL](https://sites.google.com/view/dcvl)
- `_data/*.yml` 로 내용 관리: Allan Lab 계열 Jekyll 템플릿(예: [NCSU AIAL](https://research.csc.ncsu.edu/aial/aboutwebsite.html)), [greenelab/lab-website-template](https://github.com/greenelab/lab-website-template)
- 템플릿을 그대로 쓰지 않은 이유: [al-folio](https://github.com/alshedivat/al-folio)·[academicpages](https://github.com/academicpages/academicpages.github.io)는 개인용이고 GitHub Actions 빌드가 필요하며, 연구실용 템플릿들도 한/영 전환을 지원하지 않았다.
