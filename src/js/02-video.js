import Player from '@vimeo/player';
import _ from 'lodash';
TIME_STAMP = 'time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onSaveTimeUpdate = ({ seconds } = 0) => {
  console.log(seconds);
  localStorage.setItem(TIME_STAMP, seconds);
};

const getCuttentVideoPlayerTime = function () {
  return localStorage.getItem(TIME_STAMP);
};

player.setCurrentTime(getCuttentVideoPlayerTime());
player.on('timeupdate', _.throttle(onSaveTimeUpdate, 1000));
