import {getFollowers, getRetweets, getUsers, getUserTimeline} from './client';
import {loadUsers} from './service';

(async function () {
  let data = await loadUsers(['realDonaldTrump'], 100);
  //let data = await getRetweets('1159260904631836673', 10);
  //console.log(data);
})();