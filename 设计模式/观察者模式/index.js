class Publish {

  status = 0
  sub = []

  attach(observer) {
    this.sub.push(observer)
  }

  detach(observer) {
    const index = this.sub.indexOf(observer)
    if (index === -1) {
      console.log('no exist')
      return
    }
    this.sub.splice(index, 1)

  }

  notify() {
    this.sub.forEach(o => {
      o.update(this)
    })
  }
}

class ConcreteObserverA {
  update(subject) {
    if (subject && subject.state < 3) {
      console.log('ConcreteObserverA: Reacted to the event.');
    }
  }
}

class ConcreteObserverB {
  update(subject) {
    if (subject && (subject.state === 0 || subject.state >= 2)) {
      console.log('ConcreteObserverB: Reacted to the event.');
    }
  }
}