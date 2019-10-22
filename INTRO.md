# 프로젝트 과제 - 서버 편

- 바닥부터 스스로 만들어 보는 과제 입니다. 고통스럽지만 즐겨 주시기 바랍니다.
- 스프린트 과정에서 배우지 않는 내용이 나올 수 있습니다. 시험 시간 내에 검색, 공부, 적용을 통해 헤쳐나가시기 바랍니다.
- 이 과제는 셀프 녹화가 필요 없습니다.
- 해당 과제를 직접 풀이하는 코드를 제외한 모든 리소스 검색이 가능합니다.
- 당연히 동료들의 도움은 받으면 안 됩니다.
- 이전 스프린트 과제를 참고하셔도 좋지만 지나친 복사 붙여넣기는 자제해 주시기 바랍니다.

서버 코드의 bare minimum은 간단하게 위의 API를 내가 만든 서버에서 처리하도록 만들면 됩니다. 과제 제출 및 평가를 위해 SQLite3를 사용해 주시기 바랍니다.
SQLite 연결을 위해 node server에서 sqlite3, sqlite npm client library를 사용하셔도 좋고, Sequelize ORM 을 사용하시어 SQLite를 dialect 로 연결하셔도 좋습니다.

이와 별개로, KOREA JSON 에서 돌려주는 JSON 데이터를 SQL 데이터로 data migration 하시는 것은 자신의 몫입니다. 스스로 작성한 스크립트 파일을 쓰셔도 상관 없으며 수단과 방법을 가리지 않고 방법을 구해보세요 (동료의 도움 빼고!) 정, 전체 데이터 마이그레이션이 어려운 경우엔 수작업으로 데이터를 입력해 주세요

# 셀프 평가

아래 평가 포인트에 따라 `grading.json` 파일을 업데이트 해 주세요.
최종 평가에 참고로 사용됩니다.

### 평가 스케일

`0`: 전혀 건들지 못함
`1`: 시도 해 봄
`2`: 어설프지만 구현이 됌
`3`: 요구사항을 충분히 만족함

## bare minimum

1. `json`: json 셀프 평가 포인트를 잘 작성한다
2. `run`: 개발 환경이 에러 없이 잘 실행된다
3. `eslint`: eslint 설정을 할 줄 안다
4. `test`: 모든 테스트 케이스를 통과한다
5. `directory`: 코드를 적절한 디렉토리 구조 설계와 파일 분리를 할 줄 안다
6. `readme`: 누구나 readme를 읽고 쉽게 개발 환경을 구동할 수 있어야 한다
7. `secret`: secret.js 파일 생성 후, git repository에 포함되지 않도록 처리할 수 있다(실질적으로 이 프로젝트에 활용이 되지 않아도 됩니다. 평가를 위함 입니다. "key": "super_top_secrt" 이 저장될 수 있도록 해 주세요)
8. `controller`: 컨트롤러 역할만 하는 비지니스 로직 함수들을 구현할 줄 안다
9. `model`: 모델 역할만 하는 함수들을 구현할 줄 안다
10. `router`: router 처리를 할 줄 안다
11. `docs`: REST API 문서 docs에 최소한에 필요한 정보를 적절하게 작성할 줄 안다 (`api.md`로 작성해 주세요)
12. `err_server`: 최소 2개 이상의 엔드포인트에서 서버 에러 핸들링을 처리할 줄 안다
13. `data_migration`: `KOREAN JSON API` 에서 받아오는 json 정보를 이용해서 나만의 database (SQLite3) 으로 migration (데이터 이전)을 할 줄 안다
14. `db_connect`: database 연결을 할 줄 안다
15. `env`: 환경 변수 사용으로 서버 포트 번호를 동적으로 외부에서 변경할 수 있게 한다
16. `git`: 의미있는 git commit 으로 프로젝트를 관리할 줄 안다

## advanced

1. `middleware`: 최소 2개 이상의 서버 어플리케이션 미들웨어를 사용할 수 있고, 각각의 역할에 대해 주석으로 나만의 언어를 사용하여 설명할 수 있다
2. `orm`: ORM 을 적용할 줄 안다
3. `mvc`: 디렉토리 구조에서 mvc 디자인 패턴이 명확하게 보여진다
4. `err_client`: 최소 2개 이상의 엔드포인트에서 클라이언트가 response 정보를 이용하여 클라이언트 측에서 error handling이 가능하도록 적절하게 response 정보를 구성해서 넘겨줄 수 있다
5. `adv_api_01`: client advanced의 첫 번째 페이지 (게시판 포스팅 보여주기) 에 필요한 API 를 구현할 수 있다
6. `adv_api_02`: client advanced의 두 번째 페이지 (게시판과 댓글 보여주기) 에 필요한 API 를 구현할 수 있다
7. `system`: 네모와 화살표를 이용해서 전체적인 시스템 구성도를 서버, 클라이언트, 데이터베이스 포함해서 최대한 상세하게 그려 보세요. 그림 파일을 커밋에 포함시켜 주세요. 잘 그린 그림만 보너스 점수가 부여 됩니다
8. `script_db_migration`: script 코드를 구성해서 KOREAN JSON API -> Local SQLite3 database로 한 번에 migration 이 가능하다
9. `deploy`: server application을 AWS EC2에 배포할 줄 안다
