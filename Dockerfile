FROM node:24-alpine AS build
WORKDIR /app

ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

COPY package*.json ./
RUN npm install
COPY . .

RUN echo "VITE_API_URL=${VITE_API_URL}"


RUN npm run build

EXPOSE 3000
# CMD ["npm", "run", "preview"]
CMD ["npm","run","preview","--","--host","0.0.0.0"]