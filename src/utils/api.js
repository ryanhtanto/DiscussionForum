const api = (() => {
        const BASE_URL = 'https://forum-api.dicoding.dev/v1';
      
        async function _fetchWithAuth(url, options = {}) {
          return fetch(url, {
            ...options,
            headers: {
              ...options.headers,
              Authorization: `Bearer ${getAccessToken()}`,
            },
          });
        }
      
        function putAccessToken(token) {
          localStorage.setItem('accessToken', token);
        }
      
        function getAccessToken() {
          return localStorage.getItem('accessToken');
        }
      
        async function register({ name, email, password }) {
          const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          });

          const responseJson = await response.json();
          const { status, message } = responseJson;
      
          if (status !== 'success') {
            throw new Error(message);
          }
      
          const { data: { users } } = responseJson;
      
          return users
        }
      
        async function login({ email, password }) {
          const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });
      
          const responseJson = await response.json();
      
          const { status, message } = responseJson;
      
          if (status !== 'success') {
            throw new Error(message);
          }
      
          const { data: { token } } = responseJson;
      
          return token;
        }
      
        async function getOwnProfile() {
          const response = await _fetchWithAuth(`${BASE_URL}/users/me`);
      
          const responseJson = await response.json();
      
          const { status, message } = responseJson;
      
          if (status !== 'success') {
            throw new Error(message);
          }
      
          const { data: { user } } = responseJson;
      
          return user;
        }
      
        async function getAllUsers() {
          const response = await fetch(`${BASE_URL}/users`);
      
          const responseJson = await response.json();
      
          const { status, message } = responseJson;
      
          if (status !== 'success') {
            throw new Error(message);
          }
      
          const { data: { users } } = responseJson;
      
          return users;
        }
      
        async function getAllThreads() {
          const response = await fetch(`${BASE_URL}/threads`);
      
          const responseJson = await response.json();
      
          const { status, message } = responseJson;
      
          if (status !== 'success') {
            throw new Error(message);
          }
      
          const { data: { threads } } = responseJson;
      
          return threads;
        }
      
        async function getTalkDetail(id) {
          const response = await fetch(`${BASE_URL}/threads/${id}`);
      
          const responseJson = await response.json();
      
          const { status, message } = responseJson;
      
          if (status !== 'success') {
            throw new Error(message);
          }
      
          const { data: { talkDetail } } = responseJson;
      
          return talkDetail;
        }
      
        async function createTalk({ text, replyTo = '' }) {
          const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              text,
              replyTo,
            }),
          });
      
          const responseJson = await response.json();
      
          const { status, message } = responseJson;
      
          if (status !== 'success') {
            throw new Error(message);
          }
      
          const { data: { talk } } = responseJson;
      
          return talk;
        }
      
        async function toggleLikeTalk(id) {
          const response = await _fetchWithAuth(`${BASE_URL}/threads/likes`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              talkId: id,
            }),
          });
      
          const responseJson = await response.json();
      
          const { status, message } = responseJson;
      
          if (status !== 'success') {
            throw new Error(message);
          }
        }
      
        return {
          putAccessToken,
          getAccessToken,
          register,
          login,
          getOwnProfile,
          getAllUsers,
          getAllThreads,
          createTalk,
          toggleLikeTalk,
          getTalkDetail,
        };
      })();
      
      export default api;
      