FROM public.ecr.aws/docker/library/node:18.13.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 8080
CMD ["npm", "start"]
