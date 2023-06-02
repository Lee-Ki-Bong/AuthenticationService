FROM ubuntu:22.04

# 설치시 선택창 디폴트값 으로 건너뛰기
ENV DEBIAN_FRONTEND=noninteractive

# 컨테이너 내 작업 디렉토리 설정
WORKDIR /home

# 필수 소프트웨어 설치
RUN apt update && apt install -y \
    software-properties-common \
    language-pack-ko \
    vim \
    git \
    zip \
    unzip \
    curl \
    gnupg2 \
    ca-certificates \
    lsb-release \
    apt-transport-https

# Node.js 저장소 추가 및 설치
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt update && apt install -y nodejs

# yarn 설치
RUN npm install -g yarn

# nuxt 설치
RUN yarn global add nuxt

CMD ["/bin/bash"]