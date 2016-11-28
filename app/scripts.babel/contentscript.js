import $ from 'jquery';
import url from 'url';
import path from 'path';
import sanitize from 'sanitize-filename';

const username = sanitize($('.node-info .username').text()).trim();
const title = sanitize($('.node-info .title').text()).trim();

$('.node-buttons > a').on('click', (e) => {
  e.stopPropagation();
  e.preventDefault();

  chrome.runtime.sendMessage({
    url: url.resolve(location.toString(), e.target.href),
    filename: path.join('iwara', username, `${title}.mp4`)
  });
});
