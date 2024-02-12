FROM kasmweb/core-ubuntu-focal:1.14.0
USER root

ENV HOME /home/kasm-default-profile
ENV STARTUPDIR /dockerstartup
ENV INST_SCRIPTS $STARTUPDIR/install
WORKDIR $HOME

######### Customize Container Here ###########


RUN apt update
RUN apt -y upgrade
RUN apt -y install openvpn
RUN apt -y install wine
RUN dpkg –add-architecture i386
RUN wget -nc https://dl.winehq.org/wine-builds/winehq.key
RUN add-apt-repository ‘deb https://dl.winehq.org/wine-builds/ubuntu/ focal main’
RUN apt update
RUN apt install wine32
RUN wget -nc https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.6.2/npp.8.6.2.Installer.x64.exe
#RUN apt -y install tailscale

COPY assets/mr-robot-wallpaper.png /usr/share/extra/backgrounds/bg_default.png

######### End Customizations ###########
