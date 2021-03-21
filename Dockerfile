# Létrehozunk nginx
FROM nginx


#Copy-zunk
COPY ./frontend/build /usr/share/nginx/html

#Elérhetőségi utvonal
# EXPOSE 80 alapvető a 80as port nem kell használni hacsak nem kérik a másik portot