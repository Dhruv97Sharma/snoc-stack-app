FROM node:16.17.1

# set inotify and start the node application, replace yar with your command
RUN echo "#!/bin/sh"
RUN echo "fs.inotify.max_user_watches before update"
RUN apt-get update
RUN apt-get -y install sudo
# RUN cat /etc/sysctl.conf
# RUN echo "______________________________________________updating inotify ____________________________________"
# RUN sudo echo "fs.inotify.max_user_watches=524288" >> /etc/sysctl.conf | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
# RUN echo "updated value is"
# RUN cat /etc/sysctl.conf | grep fs.inotify

# RUN yarn start:dev

# RUN chmod +x /usr/local/bin/entrypoint.sh
RUN export NODE_OPTIONS="--max-old-space-size=2048"
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN cd /app/snoc-dashboard/

WORKDIR /app/snoc-dashboard/
RUN npm install --legacy-peer-deps


# EXPOSE TARGET PORT
# EXPOSE 3001
# ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]