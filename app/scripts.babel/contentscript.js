import $ from 'jquery';
import url from 'url';
import path from 'path';
import sanitize from 'sanitize-filename';

const username = sanitize($('.node-info .username').text()).trim();
const title = sanitize($('.node-info .title').text()).trim();

$('#download-button').on('click', (e) => {
  e.stopPropagation();
  e.preventDefault();
  const file = $('#download-options li:first a').attr('href');
  chrome.runtime.sendMessage({
    url: url.resolve(location.toString(), file),
    filename: path.join('iwara', username, `${title}.mp4`)
  });
});
