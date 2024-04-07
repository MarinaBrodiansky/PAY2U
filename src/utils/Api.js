class Api {
    constructor(baseUrl) {
      this._baseUrl = baseUrl;
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    // Получение списка категорий
    getCategories() {
      return fetch(`${this._baseUrl}/categories`, {
        method: 'GET',
      })
        .then((res) => this._checkResponse(res));
    }
  
    // Получение содержимого категории
    getCategoryContent(slug) {
      return fetch(`${this._baseUrl}/categories/${slug}`, {
        method: 'GET',
        headers: {
          Authorization: 'Token',
        },
      })
        .then((res) => this._checkResponse(res));
    }
  
    // Получение детальной информации о сервисе
    getServiceDetails(id) {
      return fetch(`${this._baseUrl}/services/${id}`, {
        method: 'GET',
        headers: {
          Authorization: 'Token',
        },
      })
        .then((res) => this._checkResponse(res));
    }
  
    // Оформление подписки на сервис
    subscribeToService(id, rate) {
      return fetch(`${this._baseUrl}/services/${id}/subscription`, {
        method: 'POST',
        headers: {
          Authorization: 'Token',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rate }),
      })
        .then((res) => {
          if (res.status === 302) {
            return res.headers.get('Location');
          }
          return this._checkResponse(res);
        });
    }
  
    // Изменение тарифа подписки на сервис
    changeSubscriptionRate(id, rate) {
      return fetch(`${this._baseUrl}/services/${id}/subscription`, {
        method: 'PUT',
        headers: {
          Authorization: 'Token',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rate }),
      })
        .then((res) => this._checkResponse(res));
    }
  }
  
  const api = new Api('https://example.com');
  
  export default api;
  