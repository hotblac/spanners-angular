# Run a prebuilt Angular application in nginx.
# First, build the Angular app with using Angular CLI:
#   ng build -prod --aot
# or run the build script to reinstall packages and run the test suite:
#   build.sh
# Both require the Angular CLI to be installed already
#   npm install -g @angular/cli

FROM nginx:1.10.3
ADD dist/ /usr/share/nginx/html/
ADD nginx/ /etc/nginx/conf.d/
