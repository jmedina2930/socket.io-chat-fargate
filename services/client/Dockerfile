FROM public.ecr.aws/bitnami/node:14 AS build
WORKDIR /srv
ADD package.json .
RUN npm install

FROM public.ecr.aws/bitnami/node:14
COPY --from=build /srv .
ADD . .
EXPOSE 3000
ENV DEBUG=engine,socket.io*
CMD ["node", "index.js"]
