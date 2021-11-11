import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static values = {url: String, refreshInterval: Number}

  connect() {
    console.log('Content Loader connected')
    this.load()
    if(this.hasRefreshIntervalValue) {
      this.startRefreshing()
    }
  }
  disconnect() {
    console.log('Content Loader disconnect')
    this.startRefreshing()
  }

  load() {
    fetch(this.urlValue).then(response => response.text()).then((html) => {
      this.element.querySelector('#static').innerHTML = html

    })
  }

  loader({ params }) {
    fetch(params.url).then(response => (response.text())).then((html) => {
      this.element.querySelector('#dynamic').innerHTML = html
    })
  }

  startRefreshing() {
    this.refreshTimer = setInterval(() => {
      this.load()
    }, this.refreshIntervalValue)
  }

  stopRefreshing() {
    if(this.refreshTimer) {
      clearInterval(this.refreshTimer)
    }
  }
}