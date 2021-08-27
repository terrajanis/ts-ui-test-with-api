export class RandomUtils {

    static randomEmail() {
      return `autotest+${new Date().getTime()}@gmail.com`
    }
}
