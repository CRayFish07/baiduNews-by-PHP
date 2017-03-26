;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M937.728 838.5536 723.5072 622.5357c-2.4934-2.4996-5.248-4.4083-7.8787-6.4881 36.1861-55.9862 57.3164-122.6742 57.3164-194.5078 0-197.3463-158.6268-357.3023-354.43-357.3023-195.6936 0-354.43 159.956-354.43 357.3023 0 197.374 158.7364 357.2951 354.43 357.2951 71.2274 0 137.4546-21.3576 193.0762-57.8458 2.0255 2.7136 3.884 5.4129 6.3365 7.893l214.2484 216.0445c14.6278 14.7036 33.6783 22.0324 52.7565 22.0324 19.0915 0 38.1553-7.3277 52.7698-21.9976C966.8055 915.5523 966.8055 867.9404 937.728 838.5536M418.5149 666.0076c-133.6812 0-242.4986-109.6847-242.4986-244.4677 0-134.7625 108.8184-244.4759 242.4986-244.4759s242.4986 109.7134 242.4986 244.4759C661.0135 556.3218 552.1951 666.0076 418.5149 666.0076"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-11" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M921.745408 890.734592 628.006912 596.996096c100.204544-116.133888 95.511552-292.040704-14.687232-402.189312-55.927808-55.9104-130.2784-86.69696-209.378304-86.69696-79.099904 0-153.450496 30.78656-209.378304 86.69696-115.429376 115.377152-115.429376 303.172608 0 418.54976 55.927808 55.9104 130.279424 86.69696 209.378304 86.69696 72.699904 0 141.193216-26.302464 195.244032-73.95328l293.597184 293.597184L921.745408 890.734592zM403.958784 660.615168c-68.557824-0.016384-132.998144-26.699776-181.465088-75.132928-100.038656-100.005888-100.038656-262.759424 0-362.765312 48.484352-48.45056 112.907264-75.132928 181.466112-75.132928 68.557824 0 132.98176 26.682368 181.465088 75.132928 100.056064 100.005888 100.056064 262.7584 0 362.765312C536.940544 633.931776 472.517632 660.615168 403.958784 660.615168z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yonghu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1010.503 981.494h-113.33c0-17.913-32.342-92.139-112.398-169.553-49.414-47.786-150.678-127.948-273.662-127.948s-224.246 80.162-273.662 127.948c-80.055 77.415-112.396 151.641-112.396 169.553h-113.33c0-41.632 23.308-89.234 42.86-121.836 26.654-44.443 62.644-89.111 104.083-129.183 61.721-59.685 189.582-159.81 352.444-159.81 162.864 0 290.725 100.125 352.444 159.81 41.439 40.073 77.428 84.74 104.083 129.183 19.553 32.602 42.859 80.202 42.859 121.836z"  ></path>' +
    '' +
    '<path d="M511.113 683.995c-86.089 0-167.026-33.521-227.899-94.396-60.875-60.873-94.4-141.806-94.4-227.891s33.524-167.020 94.4-227.891 141.812-94.396 227.899-94.396 167.026 33.521 227.899 94.396c60.875 60.873 94.4 141.806 94.4 227.891s-33.524 167.020-94.4 227.891c-60.875 60.873-141.811 94.396-227.899 94.396zM511.113 152.747c-115.227 0-208.969 93.738-208.969 208.961s93.743 208.961 208.969 208.961 208.97-93.738 208.97-208.961-93.743-208.961-208.97-208.961z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-baidu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M184.256 539.584C295.68 515.648 280.448 382.592 277.12 353.472 271.68 308.672 218.944 230.336 147.328 236.48c-90.112 8.064-103.296 138.24-103.296 138.24C31.872 434.88 73.216 563.456 184.256 539.584zM302.528 771.008c-3.264 9.344-10.56 33.28-4.224 54.144 12.416 46.656 53.056 48.768 53.056 48.768L409.6 873.92l0-142.528L347.136 731.392C319.04 739.776 305.472 761.536 302.528 771.008zM390.912 316.416c61.504 0 111.168-70.72 111.168-158.272C502.144 70.72 452.416 0 390.912 0 329.536 0 279.68 70.72 279.68 158.144 279.68 245.632 329.536 316.416 390.912 316.416zM655.744 326.848c82.176 10.688 134.976-77.056 145.472-143.488 10.752-66.368-42.24-143.552-100.416-156.8-58.368-13.376-131.136 80-137.728 140.928C555.136 241.984 573.76 316.352 655.744 326.848zM857.152 717.632c0 0-127.168-98.304-201.344-204.672C555.136 356.16 412.16 419.968 364.352 499.712 316.736 579.456 242.56 629.824 232 643.2c-10.688 13.184-153.6 90.304-121.856 231.168s143.168 138.112 143.168 138.112 82.112 8.192 177.344-13.184c95.296-21.12 177.344 5.312 177.344 5.312s222.592 74.56 283.52-68.992C952.384 792.064 857.152 717.632 857.152 717.632zM476.224 931.264 331.584 931.264c-62.528-12.48-87.36-55.168-90.56-62.4-3.072-7.36-20.864-41.664-11.392-99.968 26.944-87.424 104-93.696 104-93.696l77.056 0L410.688 580.48l65.536 1.088L476.224 931.264zM745.792 930.24 579.264 930.24c-64.512-16.64-67.52-62.592-67.52-62.592l0-184.128 67.52-1.088 0 165.568c4.096 17.536 26.048 20.8 26.048 20.8l68.544 0 0-185.344 71.936 0L745.792 930.24zM981.568 438.528c0-31.808-26.432-127.552-124.416-127.552-98.112 0-111.232 90.368-111.232 154.304 0 60.992 5.12 146.176 127.04 143.424C994.88 605.952 981.568 470.528 981.568 438.528z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiahao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M896 480 544 480 544 128 480 128 480 480 128 480 128 544 480 544 480 896 544 896 544 544 896 544Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiahao1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M896 512 512 512 512 128c0-17.664-14.336-32-32-32S448 110.336 448 128l0 384L64 512C46.336 512 32 526.336 32 544S46.336 576 64 576l384 0 0 384c0 17.664 14.336 32 32 32S512 977.664 512 960L512 576l384 0c17.664 0 32-14.336 32-32S913.664 512 896 512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-add" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.556908 1013.266541c-134.303822 0-260.557294-52.052516-355.530342-146.555867C61.019749 772.132622 8.68173 646.416386 8.68173 512.61603c0-133.76761 52.338019-259.521708 147.304927-354.062921C250.960729 64.046688 377.219317 11.999288 511.524163 11.999288s260.563434 52.0474 355.497597 146.553821c95.045703 94.54019 147.343813 220.295312 147.343813 354.025059 0.032746 133.799332-52.29811 259.554454-147.343813 354.094644C772.120342 961.180256 645.861754 1013.266541 511.556908 1013.266541L511.556908 1013.266541zM511.556908 83.805708c-115.191532 0-223.456305 44.608987-304.848033 125.644605C125.348869 290.414299 80.519872 398.103974 80.519872 512.61603c0 114.50694 44.796252 222.196615 126.149095 303.122739 81.397868 81.035618 189.656501 125.650745 304.855196 125.650745 115.15981 0 223.457328-44.615127 304.85008-125.650745 81.357959-80.996732 126.186957-188.647521 126.149095-303.160601 0-114.514103-44.790112-222.163869-126.149095-303.089993C735.014236 128.452557 626.716718 83.805708 511.556908 83.805708L511.556908 83.805708zM763.000638 476.694913 547.479049 476.694913 547.479049 261.173324c0-19.824511-16.092513-35.917024-35.922141-35.917024-19.823488 0-35.916001 16.092513-35.916001 35.917024l0 215.521588L260.119319 476.694913c-19.824511 0-35.916001 16.090467-35.916001 35.921117 0 19.824511 16.09149 35.917024 35.916001 35.917024l215.521588 0 0 215.520565c0 19.86442 16.092513 35.917024 35.916001 35.917024 19.830651 0 35.922141-16.052604 35.922141-35.917024L547.479049 548.533055l215.521588 0c19.862373 0 35.916001-16.092513 35.916001-35.917024C798.916639 492.78538 782.863011 476.694913 763.000638 476.694913L763.000638 476.694913zM763.000638 476.694913"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-add30" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M959.998212 448.001788 575.998212 448.001788 575.998212 64.001788c0-35.345979-28.652233-63.998212-63.998212-63.998212s-63.998212 28.652233-63.998212 63.998212l0 383.996424L64.005364 447.998212c-35.345979 0-64.005364 28.652233-64.005364 63.998212 0 35.345979 28.659385 63.998212 64.005364 63.998212l383.996424 0 0 383.996424c0 35.345979 28.652233 63.998212 63.998212 63.998212s63.998212-28.652233 63.998212-63.998212l0-383.996424 384 0c35.345979 0 63.998212-28.655809 63.998212-63.998212C1024 476.654021 995.344191 448.001788 959.998212 448.001788z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yonghu1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M381.165186 590.786391c-91.952248-56.039317-145.073096-134.768403-148.307767-243.167229-2.266623-75.960019 23.532973-141.870148 75.865875-196.708104C423.543366 30.594809 606.66094 33.771151 719.068056 155.287739c119.122051 128.777969 86.22685 352.063381-76.765361 435.728896 7.951089 3.470031 15.092743 6.631024 22.268166 9.712199 112.555495 48.321542 190.227506 130.027425 230.966349 245.765403 9.261944 26.312272 13.139252 54.55757 19.008936 82.016968 1.00898 4.720511 0.298805 10.147104-0.883113 14.934131-2.949168 11.954263-11.441587 18.191314-22.964014 17.817808-12.226462-0.397043-21.088294-7.831362-23.585161-19.709901-4.691859-22.317285-7.268544-45.351907-14.476713-66.821895-45.75509-136.273686-137.496537-222.568075-279.922341-247.998257-122.007775-21.784142-228.086765 13.602809-315.907926 101.508905-56.93778 56.992015-88.920192 126.557394-99.447966 206.26476-1.988284 15.052834-8.006348 23.602557-19.126616 26.323529-16.812921 4.114714-31.145347-8.580422-29.467125-26.329668 6.036483-63.86454 26.680663-122.737392 61.452607-176.449711 47.130414-72.802096 111.054305-125.504412 191.192483-158.399613 5.142114-2.111081 10.194176-4.442172 15.281031-6.685259C377.651153 592.543408 378.581338 592.049151 381.165186 590.786391zM511.632633 572.410881c126.089743 0.030699 227.637534-101.603049 229.544977-225.201042C743.253898 212.605166 636.475989 115.088178 517.492084 111.997793c-124.541481-3.234671-233.487775 96.110965-235.544621 226.542596C279.93155 466.382033 382.093325 572.373019 511.632633 572.410881z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)