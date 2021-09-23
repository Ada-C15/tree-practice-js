FROM node:14

WORKDIR /app

COPY package.json .
RUN npm install

ARG SUBMISSION_SUBFOLDER
COPY $SUBMISSION_SUBFOLDER .
# COPY . .

RUN chmod +x /app/test.sh
