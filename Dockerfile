FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run generate
RUN npm run build

FROM node:24-alpine

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
RUN npm install --omit=dev

EXPOSE 3000

CMD ["node", "dist/main.js"]
