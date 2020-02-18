# Great(Sub-PJT 03)

1. [기본 환경 세팅](#기본-환경-세팅)

2. [디렉토리 구조](#디렉토리-구조)

3. [데이터베이스 구조](#데이터베이스-구조)

4. [REST API](#rest-api)

5. [구현 결과](#구현-결과)

6. [Test](#test)

7. [Developers](#developers)

   

## 기본 환경 세팅

### Frontend

- `Node.js`: v12.14.0
- `npm`: 6.13.4
- `vue`: 2.6.11
  - `vuecli` : `npm install -g @vue/cli` : 4.1.2
- package.json dependencies
```
"dependencies": {
  "core-js": "^3.4.4",
  "vue": "^2.6.10",
  "vue-router": "^3.1.3",
  "vuetify": "^2.1.0",
  "vuex": "^3.1.2"
  }
```

### Backend

- `Spring boot`
  - `STS(Spring-Tool-Suite)` : 2.2.3 RELEASE
  - `Java` : v1.8
  - `maven-jar-plugin` : 3.1.1
  - `myBatis` : 2.1.1
- `AWS`
  - `Docker` : 19.03.5 ver
  - `MySQL` : 8.0.19

## 디렉토리 구조

```
.
|-- README.md
|-- back
|   |-- Dockerfile.txt
|   |-- mvnw
|   |-- mvnw.cmd
|   |-- pom.xml
|   |-- sql
|   |-- target
|   `-- src
|       `--main
|           |-- java
|           |   `-- com
|           |       `-- ssafy
|           |           `-- great
|           |               |-- GreatApplication.java
|           |               |-- config
|           |               |-- controller
|           |               |-- dto
|           |               |-- filter
|           |               |-- interceptor
|           |               |-- model
|           |               `-- util
|           `-- resources
|               |-- application.properties
|               |-- config
|               |   |-- SqlMapConfig.xml
|               |   `-- application-config.xml
|               `-- query
|                   |-- bookmark_sql.xml
|                   |-- category_sql.xml
|                   |-- review_sql.xml
|                   |-- store_sql.xml
|                   `-- user_sql.xml
`-- front
    |-- README.md
    |-- babel.config.js
    |-- frontworkspace.code-workspace
    |-- node_modules
    |-- package-lock.json
    |-- package.json
    |-- vue.config.js
    |-- public
    `-- src
        |-- App.vue
        |-- apis
        |   `-- UserApi.js
        |-- assets
        |   `-- style
        |-- components
        |   |-- Grid
        |   |-- Tab
        |   |-- UI
        |   `-- common
        |-- main.js
        |-- plugins
        |   `-- vuetify.js
        |-- routes
        |   `-- index.js
        |-- store
        |   `-- index.js
        `-- views
            |-- Authentication.vue
            |-- Index.vue
            |-- Main.vue
            |-- Mypage.vue
            `-- PageNotFound.vue
```



## 데이터베이스 구조

#### 사용자 테이블 : user

| 이름      | 정의                | 타입          | 비고                        |
| --------- | ------------------- | ------------- | --------------------------- |
| id        | 사용자 구분 고유 키 | int           | auto_increment, primary key |
| email     | 이메일 주소         | varchar(30)   | sns 가입 시 null            |
| password  | 비밀번호            | varchar(20)   | sns 가입 시 null            |
| sns_token | sns 인증 토큰       | varchar(100)  | 자체 회원가입 시 null       |
| birth     | 생년월일            | Date          |                             |
| gender    | 성별                | enum("M","F") | 'M' : 남성 'F' : 여성       |
| name      | 닉네임              | varchar(10)   |                             |

#### 카테고리 테이블 : Category

| 이름 | 정의                  | 타입        | 비고                        |
| ---- | --------------------- | ----------- | --------------------------- |
| id   | 카테고리 구분 고유 키 | int         | auto_increment, primary key |
| name | 카테고리 이름         | varchar(50) |                             |

#### 식당 테이블 : store

| 이름          | 정의              | 타입         | 비고                        |
| ------------- | ----------------- | ------------ | --------------------------- |
| id            | 식당 구분 고유 키 | int          | auto_increment, primary key |
| name          | 식당 이름         | varchar(30)  |                             |
| open_time     | 영업 시간         | varchar(50)  |                             |
| map_x         | 식당 위치 x좌표   | double       |                             |
| map_y         | 식당 위치 y좌표   | double       |                             |
| location_name | 식당 위치         | varchar(50)  |                             |
| rating        | 별점              | double       |                             |
| phone         | 식당 전화번호     | varchar(15)  |                             |
| category      | 식당 카테고리     | int          | foreign key(category.id)    |
| tag           | 식당 상세 태그    | varchar(100) |                             |
| image         | 식당 사진 URL     | varchar(100) |                             |

#### 메뉴 테이블 : menu

| 이름  | 정의              | 타입        | 비고                        |
| ----- | ----------------- | ----------- | --------------------------- |
| id    | 메뉴 구분 고유 키 | int         | auto_increment, primary key |
| store | 식당 id           | integer     | foreign key(store.id)       |
| name  | 메뉴 이름         | varchar(30) |                             |
| price | 메뉴 가격         | int         |                             |

#### 리뷰 테이블 : review

| 이름     | 정의              | 타입         | 비고                        |
| -------- | ----------------- | ------------ | --------------------------- |
| id       | 리뷰 구분 고유 키 | int          | auto_increment, primary key |
| store    | 식당 id           | int          | foreign key(store.id)       |
| contents | 리뷰 내용         | text         |                             |
| date     | 리뷰 작성 날짜    | Date         |                             |
| image    | 리뷰 사진 url     | varchar(100) |                             |

#### 북마크 테이블 : bookmark

| 이름 | 정의                | 타입        | 비고                        |
| ---- | ------------------- | ----------- | --------------------------- |
| id   | 북마크 구분 고유 키 | int         | auto_increment, primary key |
| user | 사용자 id           | int         | foreign key(user.id)        |
| name | 북마크 이름         | varchar(20) |                             |
| type | 북마크 타입         | char        | 'S' : 식당 , 'G' : 그리드   |

#### 북마크 식당 테이블 : bookmarkstore

| 이름     | 정의                     | 타입 | 비고                        |
| -------- | ------------------------ | ---- | --------------------------- |
| id       | 북마크 식당 구분 고유 키 | int  | auto_increment, primary key |
| bookmark | 북마크 id                | int  | foreign key(bookmark.id)    |
| store    | 식당 id                  | int  | foreign key(store.id)       |



#### Database Diagram

![DatabaseDiagram](/img/DatabaseDiagram.PNG)



## REST API

#### User API

| Method | URI                  | Definition                                            |
| ------ | -------------------- | ----------------------------------------------------- |
| GET    | /user                | 모든 사용자 목록 검색                                 |
| GET    | /user/{id}           | 사용자 id에 해당하는 사용자 검색                      |
| GET    | /user/email/{email}  | 사용자 email에 해당하는 사용자 검색(이메일 중복 체크) |
| GET    | /user/search/{email} | 사용자 email에 해당하는 사용자 id 검색                |
| POST   | /user/login          | 사용자 로그인                                         |
| POST   | /user/socialLogin    | 사용자 소셜로그인                                     |
| POST   | /user                | 사용자 정보 등록(회원가입)                            |
| PUT    | /user                | 사용자 정보 수정                                      |
| DELETE | /user/{id}           | 사용자 id에 해당하는 사용자 정보 삭제(회원탈퇴)       |

#### Category API

| Method | URI       | Definition              |
| ------ | --------- | ----------------------- |
| GET    | /category | 모든 카테고리 목록 검색 |
| POST   | /category | 카테고리 등록           |

#### Store API

| Method | URI                                | Definition                                                   |
| ------ | ---------------------------------- | ------------------------------------------------------------ |
| GET    | /store/{id}                        | 식당 id에 해당하는 식당 정보 검색                            |
| GET    | /store/rating/{category}/{x}/{y}   | 식당 category에 해당하는 식당 목록 검색<br>(별점 기준 내림차순 정렬) |
| GET    | /store/location/{category}/{x}/{y} | 식당 category에 해당하는 식당 목록 검색<br>(거리 기준 내림차순 정렬) |
| GET    | /store/rand/{category}/{x}/{y}     | 식당 category에 해당하는 식당 목록 검색<br>(랜덤 정렬)       |
| PUT    | /store                             | 식당 정보 수정                                               |
| DELETE | /store/{id}                        | 식당 id에 해당하는 식당 정보 삭제                            |

#### Review API

| Method | URI                     | Definition                                                   |
| ------ | ----------------------- | ------------------------------------------------------------ |
| GET    | /review                 | 모든 리뷰 목록 검색                                          |
| GET    | /review/{id}            | 리뷰 id에 해당하는 리뷰 검색                                 |
| GET    | /review/store/{store}   | 식당 id에 해당하는 리뷰 목록 검색<br>(리뷰 작성 날짜 기준 내림차순 정렬) |
| GET    | /review/search/{userId} | 사용자 id에 해당하는 리뷰 목록 검색                          |
| POST   | /review                 | 리뷰 정보 등록                                               |
| PUT    | /review                 | 리뷰 정보 수정                                               |
| DELETE | /review/{id}            | 리뷰 id에 해당하는 리뷰 정보 삭제                            |

#### Bookmark API

| Method | URI                          | Definition                                       |
| ------ | ---------------------------- | ------------------------------------------------ |
| GET    | /bookmark/{user}/{type}      | 사용자 id와 type에 해당하는 북마크 목록 검색     |
| GET    | /bookmark/{id}               | 북마크 id에 해당하는 식당 목록 검색              |
| POST   | /bookmark                    | 북마크 정보 등록                                 |
| PUT    | /bookmark                    | 북마크 정보 수정                                 |
| DELETE | /bookmark/{id}               | 북마크 id에 해당하는 북마크 삭제                 |
| DELETE | /bookmark/{userId}/{storeId} | 사용자가 북마크한 식당 id에 해당하는 북마크 삭제 |



## 구현 결과

#### Index 

![index](/img/pages/index.PNG)

![index2](/img/pages/index2.PNG)

![index3](/img/pages/index3.PNG)

<img src="/img/pages/mindex.PNG" alt="mindex" style="zoom:80%;" />



#### Login / Join

![join](/img/pages/join.PNG)

![socialjoin](/img/pages/socialjoin.PNG)

<img src="/img/pages/mlogin.PNG" alt="mlogin" style="zoom:70%;" />

<img src="/img/pages/mjoin.PNG" alt="mjoin" style="zoom:70%;" />

#### Mypage

![mypage1](/img/pages/mypage1.PNG)

![mypage2](/img/pages/mypage2.PNG)

![mypage3](/img/pages/mypage3.PNG)

<img src="/img/pages/mmypage.PNG" alt="mmypage" style="zoom:70%;" />

#### Grid

![grid1](/img/pages/grid1.PNG)

![grid2](/img/pages/grid2.PNG)

![sidebar](/img/pages/sidebar.png)



## Test

#### Test Case

![TestCase1](/img/TestCase1.PNG)

![TestCase2](/img/TestCase2.PNG)

![TestCase3](/img/TestCase3.PNG)

![TestCase4](/img/TestCase4.PNG)



## Developers

#### 양찬우 (Team Leader / Front-End manager)

#### 박지수 (Back-End manager)

#### 조한슬 (Back-End developer)

#### 조신비 (Front-End developer)

#### 신채민 (Front-End developer)