import React from 'react'


function Box() {
  return (
    <div>
        <div className="formbold-input-radio-wrapper">
        <label for="ans" className="formbold-form-label">
          Would you recomend our site to a friend?
        </label>

        <div className="formbold-radio-flex">
          <div className="formbold-radio-group">
            <label className="formbold-radio-label">
              <input
                className="formbold-input-radio"
                type="radio"
                name="ans"
                id="ans"
              />
              Yes
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label">
              <input
                className="formbold-input-radio"
                type="radio"
                name="ans"
                id="ans"
              />
              No
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label">
              <input
                className="formbold-input-radio"
                type="radio"
                name="ans"
                id="ans"
              />
              Maybe
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="formbold-input-radio-wrapper">
        <label className="formbold-form-label">
          Which languages & freameworks you know?
        </label>

        <div className="formbold-radio-flex">
          <div className="formbold-radio-group">
            <label className="formbold-radio-label" for="c">
              <input
                className="formbold-input-radio"
                type="radio"
                name="c"
                id="c"
              />
              C
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label" for="c++">
              <input
                className="formbold-input-radio"
                type="radio"
                name="c++"
                id="c++"
              />
              c++
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label" for="java">
              <input
                className="formbold-input-radio"
                type="radio"
                name="java"
                id="java"
              />
              Java
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label" for="python">
              <input
                className="formbold-input-radio"
                type="radio"
                name="python"
                id="python"
              />
              Python
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label" for="javaScript">
              <input
                className="formbold-input-radio"
                type="radio"
                name="javaScript"
                id="javaScript"
              />
              JavaScript
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label" for="react">
              <input
                className="formbold-input-radio"
                type="radio"
                name="react"
                id="react"
              />
              React
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label" for="angular">
              <input
                className="formbold-input-radio"
                type="radio"
                name="angular"
                id="angular"
              />
              Angular
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label" for="django">
              <input
                className="formbold-input-radio"
                type="radio"
                name="django"
                id="django"
              />
              Django
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label" for="tailwind">
              <input
                className="formbold-input-radio"
                type="radio"
                name="tailwind"
                id="tailwind"
              />
              Tailwind CSS
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label" for="bootstrap">
              <input
                className="formbold-input-radio"
                type="radio"
                name="bootstrap"
                id="bootstrap"
              />
              Bootstrap
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>
        </div>
      </div>

      <div>
        <label for="message" className="formbold-form-label">
          Any comments or suggestions
        </label>
        <textarea
          rows="6"
          name="message"
          id="message"
          placeholder="Type here..."
          className="formbold-form-input"
        ></textarea>
      </div>
    </div>
  )
}

export default Box