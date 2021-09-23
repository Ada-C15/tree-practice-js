# Install latest version of node (older versions are not guaranteed to work with Learn)
FROM node:14.15.4

WORKDIR /app

COPY package.json .

RUN npm install
RUN npm ci
#  For testing
# COPY . .

ARG SUBMISSION_SUBFOLDER
ADD $SUBMISSION_SUBFOLDER /app

COPY test .

RUN chmod +x /app/test.sh

CMD [ "npm", "run", "test" ]
