FROM node:20-alpine

WORKDIR /app

# on installe les deps séparément pour profiter du cache
COPY package*.json ./
RUN npm install

# on copie le reste (en dev on va override avec un volume)
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
