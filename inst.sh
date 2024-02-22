rm -rf back/static
rm -rf /templates/index.html
cp  front/build/index.html templates
cp front/build/static back -r
