import { render, screen, cleanup } from "@testing-library/react"

import { shallow, mount } from "enzyme"
import { Game } from "Pages"
import { Weapons } from "Components"

import App from "./App"

afterEach(cleanup)

describe("app", () => {
  let appWrapper, weaponsWrapper
  beforeAll(() => {
    appWrapper = shallow(<App />)
    weaponsWrapper = shallow(<Weapons />)
  })

  it("should app has Game component", () => {
    const game = appWrapper.find(Game)
    expect(game).toHaveLength(1)
  })
})
