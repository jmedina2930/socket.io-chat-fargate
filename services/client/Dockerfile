FROM public.ecr.aws/bitnami/node:14
WORKDIR /srv
ADD package.json .
RUN npm install

FROM public.ecr.aws/bitnami/node:14
COPY --from=build /srv .
ADD . .
EXPOSE 3000
CMD ["node", "index.js"]
