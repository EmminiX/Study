FROM nginx:alpine

# Copy website files to nginx html directory
COPY . /usr/share/nginx/html/

# Remove unnecessary files that shouldn't be deployed
RUN rm -rf /usr/share/nginx/html/node_modules \
    /usr/share/nginx/html/venv \
    /usr/share/nginx/html/package-lock.json \
    /usr/share/nginx/html/Dockerfile \
    /usr/share/nginx/html/docker-compose.yml \
    /usr/share/nginx/html/.DS_Store \
    /usr/share/nginx/html/setup.sh \
    /usr/share/nginx/html/Upgrade_plan.md \
    /usr/share/nginx/html/Upgrade_plan.pdf

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 