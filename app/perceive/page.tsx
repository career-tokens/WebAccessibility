/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import BackHome from "@/components/ui/backhome";
import Image from "next/image";
import React, { ReactNode } from "react";

const Images = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col p-5 gap-y-[5vh]">
      <BackHome />
      <style>
        {/* proper styling to help identify the focused element */}
        {`
            *:focus{
              outline-color:red;
            }
          `}
      </style>
      {/* We are using a header here since the screen reader will be able to decipher 
          it as a header and hence speak it. This will help the blind in knowing which tab
           they are on */}
      <h1
        className="text-lg bg-blue-600 text-white px-5 py-3 rounded-lg w-[95%] sm:w-[70%]"
        tabIndex={0}
      >
        We need to associate more information with an image so that the screen
        reader picks that up when the image is focused. Try navigating through
        these images using Tab key or focus separately to understand the
        difference. Keep the screen reader on and for better understanding, view
        the code on Github.
      </h1>
      <div className="w-[80vw] flex-wrap flex gap-x-[5vw] justify-center items-center">
        <ThreeDWrapper>
          {/* The image without proper alt text so the screen reader 
              will stay silent which is bad UX for blind people */}
          <Image
            tabIndex={0}
            height={300}
            width={300}
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <CardItem
            as="p"
            translateZ="60"
            className="text-base max-w-sm mt-2 text-neutral-300"
          >
            This image element has got no alt text associated neither any
            aria-label and hence screen reader will stay silent
          </CardItem>
        </ThreeDWrapper>

        <ThreeDWrapper>
          {/* we have proper alt text so the screen reader will read that on selecting this image */}
          <Image
            tabIndex={0}
            height={300}
            width={300}
            src="data:image/jpeg;base64,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"
            alt="Sunrise is the one of the most beautiful natural phenomenon."
          />
          <CardItem
            as="p"
            translateZ="60"
            className="text-base max-w-sm mt-2 text-neutral-300"
          >
            This image element has proper alt text associated so the screen
            reader will read that on focusing the image
          </CardItem>
        </ThreeDWrapper>

        <ThreeDWrapper>
          {/* same here as above, its just that on hovering over the image, the title will also appear */}
          <Image
            tabIndex={0}
            height={300}
            width={300}
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRUYGBgYGBEYGBgYGRoYGBgRGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjEhISE0NDQ0MTQ0MTQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDE0NDQ0NDQ0ND80NDQ1NDE0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABAECAwUGB//EAEYQAAIBAgIHBQILBgMJAQAAAAABAgMRBBITITFBUWGRBVJxgaEUsQYVIjJCYnKSwdHwQ1OCstLhg8LxIzM0VHOEk6LiFv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACgRAAICAgICAgIBBQEAAAAAAAABAhEDEhNRIUExYQSRgSIyQqGxBf/aAAwDAQACEQMRAD8AtYq0NRUO8+hbRw7z6Hk2epqJMgbdOHeKOEdzQWGouBu4IpKCHsGpmmSmTYAseoXJzEJE2FY0iymyc5VRJUQsdFlItcpYlITCi6mWzIyyk2JHRopcyLmeUmwBRZtlXIgBhRZTZKqMoQPwI20z4k+0S4mBDkwoBlYmRPtDFMzDPyFSAcddldOxdSIuFIBnTviTHES4iqZdDpANRx01vNfjOe+z8hGxKgLVC8j3xjLuxASysBaxH5E2uRMZFNP4gq5oFDEZrejWEqe/MvBiWkRKmQykjpxhQ781/Df3A6FDdVfnFnNzGmkfBdCafZVDnssH82tHzTRK7PT2Th1EUawy736Ml2vY1FdDPxdLdKL8GR7BPh6oIU4PZL3m8cNHvvp+InN9lKC6MHgZ8CHhZ8Bz2WK2VH1NIxt+0fUjkZXGjmOhJBomdZVeMvc/wCVePFP+FBysNEcnRMnRvgdRThy6fkVcIvZIORj0Obo2Coye5nQ0HBoq6Elu6MOQOMVjgpv6LLfF0+AzFzjszLwLSxc19KQbsnQUfZ0+BaHZs3t1G3t0+97iV2hPj6IN5Bp9FqXZiWuWZ8kWnRgtlJecmV+NJcE/IPjZ9yIXJi1S9CtSlfZBLwuVhhvq9Rv41e6MV5f3LLtV70vJDuQtUKPDcuhmsLPcrj77U/WVFV2k+8+iGpSE4oU9ln3X0BYWfcHPjJ8fQq8c+PoG0g1RjHCT7qLrBy5FvbH3vQlYr6wbSFqiPY3yAt7XzQCtj1RxdA+KIeGfI3yciU1wL3ZeiFfZ5ciNCx264B8ngw3Y9EJ6Jl402NKEeZpolxZO41jFVBl1BjGgXEFQ5kuZagYqBrCFjVYZ8TRYV8SHJFa0ViiyhyLLCs0jhXzIckPwRCjxRdYeJMaDXEuovmTsJ0UeDT2XKSwL3e42i2aK+5hsyWqE3hZLcUdKa4nT18Q0ltobsNmcvNJb2Glmt51XWhv9xTJRlt9Lorf6Ft2mcuVaW+3RFXX4xj0OxLBUnvfUhdmU+LfmPdEbo4lSqt0UiilE7lTsmD2XXncRxHZjj83Xy/uVGaGpKQrClB711NHhVuYtOm1ti0Z5uDL/AJHSGJYfmVdFmekfeLKsyvIqRVwkVzPgbaRBcdsVGOdk6RmlzOTGiWg0nJAVuA/AqN9Kv0iM8RVT5k5uZnqbDUZokWTfFk5+Ymi0MJkqquAtmbJ18CWkUkNxqI2jViIRk+BvFX3ENFpDsakWbxmhCFNczdQ4OxmxSih6nOO8YhXic+NL6yNY4aT2NEOjCUYv5Z0I1IPgXVKD4CcMNPcjaCmvomcq9M55RS/tf+xlYSD2JFZdlRf0mi1Oc98TZVH3fUzc2vZg5zT8MSn2Wt0vUXfZ/wBZdTp1JPurqhGspciozfZrjyTfsXlgbcH5mEsOlu6Nl6tVrchWdd8PU3jZ1wUn8s0dKPGXX+xm090kvHX+AKrf6PqVlFPcWaKL9lZ5tudeVxV4qS+n6s2nTXAXnQ4XKi0NwNViZP6T95Eo5tblHzVn6GMYNbH1KzvxXU0QmqJnhlud/AylBreRkl/oyroPen1Ra+zOUSubmRpmt5OiW+66Gcqa73oWqIcWarEX2oFO+8xyfWQRp80VSJNs/MDPK+XUkVAYuogVZCVwua8aFsx+VSMla73bORtGtwZy0ycxLxlxmzsQqmsa/gcRVGXjW5mbxGqyHcjWvuRtGXL1OFGu1vNY4p8TOWF+jWM0zuRZrE4kcS+8/U3ji5d4yljZVWdqKXA3pzjzOJHGS73obU8XLijOWNmcsLaOzGul3uptDErvSRz6OOjvjfzHIY6n3fVHPKD6OWeNr/FjkMR9aXQ19ofF+cRWGJp95LxX4o0daC1uS8l/cycX0c0oefh/oipivs+aFp4j7PUZ9opd9ecWL1sRQW9Pwiyop9MuC81q/wBC06l9y6i85cYrqTWxVLdF+4Sq109it5nVGL6O7HBv1Rs5ru9GTpVz94hKsZuvzNVE34zoOtHiU0y4nOlXfEzlO+8axhSR0Jzg9/QWnTjulbxQnOZjKb4mkcZnKVD6g/qsHHw6nN0j4k+0y4mnGzPZDrfNehSXgKPEN8CNMUsbJckMS8DNsz074g6xerM20aXAz0oBqxWhe5FzLMGY6NDDc2uCZjmDMGhSkja5BnmJU+ZLiWpI0RpEyVV8SdJxZLgzWM0MQfM3jJiSqmka5nKDN4Tj2PQkzeMznQxJosSZSxs6Yyi/Z0oTNYTObDEI3jXRk4NF6p/B04TNsxzaeIOthez6tSN4xbXHYZvG38I5susPMnSMJSMJSDFtwk4yTT4MRniBqDNccbVr4N3MxnMXniTCeINI42y21EZnUMp1BWVcylVN44zCWRDMqhR1BaVQo5mixmEsqGHMrmF3UKuZagYyyDDqEZhfMGYpQM3kN8xOYWzBmK1JeQYzBmMMwXHqRuMZgF8xIahuUzriGdcUZOHIFBm2qOLlZrnXFdQzriYuDIyPgGqHzSN864oFUXFGDgyVB8A0Q+aRvnXFE6VcULZWTkYtUNZ5DCqLiupZVVxXUVyMlQZOiLX5Ml6GlVjxXUuq0e8uqEtGGUXGjSP5kl6H1iI96PVGkMTHvR6nNUAUCXhizaP/AKE4+kdyhi4XV5x+8kfTuze2sPoo2rU46krOUVa2rZc+MKL4FlIWOHG7QvyM0fyUlPxXR7v4YdqUKk45akG4qzakne+vajy1TGQ78fI5kncycSeFSk5P2XD854YKEF4XZ0J4qPeXUo8RHvLqIZCHA0WKJlL8+cvSHXWj3l1Kusu8uonkBwKWOJk/y5P0NaWPFdQdWPFdRRw5BoytEZv8mXQ1pI8V1Kyqx4rqK6MjIPRC55dDWlXFdQzriuopkBwDVE88uhtVI8UGkjxQpkDIPRE8z6G88e8upOlXFdRPRBkDVC5mOaSPFEiWiJHqHMzqKHIHHkNaN+8jRv8AW0ixCuTkRoxrRsh07BYCujJVMY0fP0DRBY6FnT8SVTGVT/WsFALBRF1AnRjGTWZyaTtvd35LaKwoy0YOBarUjFOTepX2b7Jt21itLtKEsu3XFzvutmlFa3vvHYHkdjOjIUEZLGwz5HLW8trc76vQc0a3CbKRhlDKMKly9wZOTFZXkXcSGhrRvh1/0K6P6v66BYmhaxVwGVB8CLPgOyaF8nIMgzkfAHAakArKHIjKNOH65lcn4bh2S0LOmUcBqUCJU+Y0woWyBkGMgZHtuFk0L5QyjDgyMnHUOwowy8ycnMY0YaP9ILFQvo0Bvk/VgDYKOxk5+n9w0fP0OdH4V4V7YzXlD+olfCjDPZfpb3XMql0a+Do6P9WIUP1qEn8I8NxfSf8ASWh8IcNvm1/DN/5QqXQ049jWR8PREOHL3C/x9he+/u1PyI//AEGG3OT9Pe/eFS6H/T2M5GTbw6/2FPj/AA9r/Kvq1X1++3qa0u2cPL9oo8pSa/CwmpdAnHsjEV1Dbbrx2Nq2y+o8T2h2pUdRS2OLll4WvZ2dlfWvK1uR1PhL2lCacYVm7NfJsmnd7YzSTTXndOx5e93+ZrCPi2Y5JeaR0J9pzlDLfZJTX2la23bv6sRhUa2bk4rlt/NsiErO5E7X1Xtz1PmaUZ2y9Os4yUuDT6a0vDUj0/ZHbEpWi1e13J2V3KV8qilH1b4HlLjlDtKcIZIyslLNaytstr1Xe17RONlRlqz31PEwbspR184/K36uOrX4NcUbuC5eh4fsXEXmszi5OV25SlGUr3ulJRlq2fJVr6tT3e9hbKrtLZq+VZLk3FHPOOrOqEtkYuHh1Bwtuj1W4Zyp7JJ+F2ZtR73vZFlNGKh9l6u9+BGj8H5o3jCL3rqyJUI8vUdiaF5U91o9f7FXB91X8d4y6EeTIdCP1ehSZNGCh9VehGR3u16oY0C+r0KezLZ8noFiownDwXmirguXVDLw64R+6yPZ/s9JfmGyChZRX6aLWXLqvUY0G6y3EKh9Vb9Y7RLiLuNt/uQZDb2Z8vVh7P08/wACrQnFmLj+rEuHgauhs/8Ar3Eqjbffr+YWKjLRr9W/MgY0fNdGAWFHHp9vYx5ssVLI/lWpZsuq/wArK9WphPtzETtCeGp1Lq6i6NSbceKjmernY8YoLgCVtmrw1azTjj0Ss8uz1FROW3s9L7FLEw/lkhOthrr5OFnB8UsQ/STZyY1pxVoznFcIykla/BMvSxlSNlCpUilf5s5xSv4MajXwDyJ/Ix7LLuTt9iXhwIdHx6NfgYUcdVj8yrUht+bOcdru9j3vWay7VrvW8RW3ftJrZs2Mfkm4/ZpSVNP5am/sTjD+aEhxYjBpO9Kq3b9+tT3alTRya+KnUtnnOdtmecpW8MzdiVjaigoZ3kV7RdmlfhfZtYnGxrJXx/wXxM1KTyxyrcszlu3t7eiMltLSK2KSIuyWiYJO921qdrK95bltVlz9C1KrlfzYS26pxUk9VvH1KXGASS3fpkE2CwAN4ClCT/2lTIr7oSm+N7Ky5beG7Weg9noJfJxzWr9xWjq8pHloSSabV1datl1w1F1Ue4zcW380bY8iiqqzvV56/k4nPzbrxfSUWYurP95fwnU/FHI0r1evNllVY1GiZTtnapTnJpKsl9qrKEV5yskdnB4Ctur4aafexM5dMskeb7OrUE5e0Kq1ZZFScFeWu+bOtW61uDK4bG0oyekoOcXK6tVlFxhw1fOfPV+USi38GuOUV5l5/k9jHsetf/fU19jFVoro7jEex52/4mUXvtiZS/mgeTnjcJlvClFSyyeWcasvlJq0VJVra7t5mlbLxaQlLtd/RpUI+FGEv51Iy45v3X8Gzy4o+r/k938WSWt42Sf/AFqbXRwRk8JK/wAnHSf3J+6J4ldvVo/MlGP2aVGPrGCLv4R4l7a9Tym4/wAth8WTsTz4ej1zweIfzcXN/wDbN+5krC4vdWT+1QqR/wArPFPtms9tat/5Z/1Gb7UqvbUqP/En/UUsU+1+jN58fTPc6DHrZKhLxjUj/kRV0+0OFB9fxPDfGVTvz+/P8yy7Rn35/fn+Y+OXa/RPNDpnsp0u0L3UYfwunb/2K5O0O50lh/yPIR7Vqd+f35/maLtmr+8qffn+Y9JfX6Fyw6f7PWQljltw7lzc6S/lZr7ViVtwl/8AEj+Z5an29XWytU85t++5tH4TYlft5PxhTfvgLSf0Pkx/Z3vbMT/yq+8v6gPPvt+q9slffelS/oANZdIneH2cMCziRkNznK3DMTlYODARGYnMGVkqDAZW5Ny2QMgDM7BJWNMqIlEBGbRCLMqgGWTLtXKJF0A0UcC6RYLABWxJNgJAq2RYtYLABTKRY0BjsTM2gNCqQxFQLJEMAIAAAATJuQguAEplsxQAAvmJM7AAGtwUi2j5ldFzQAQ5sFInRshwYATpCVUK5HwIsyQL6QMyK2AALMCoABaxVxJBgMjKWykElABNiLg2SFhYLBcLgMmxFibkZgAGVaJzBcBEATqITQCBorlLgwAzcSLGhJQGVgsatEZQAzAu0UaAAALAAxhAAEiAGAFAWkZsAJAImiJAAKNFKgAUBmi7ACQCQRABoAIZICAqWYAAARIkAGQwZIAIzYLeAABdbiZAA0BV7SwAIARYAKACGAAIAAAGf//Z"
            alt="Sunrise is the one of the most beautiful natural phenomenon."
            title="Picture of Sunrise"
          />
          <CardItem
            as="p"
            translateZ="60"
            className="text-base max-w-sm mt-2 text-neutral-300"
          >
            This image has a proper alt text as well as a title and hence on
            hovering over it, the title will appear
          </CardItem>
        </ThreeDWrapper>
        <ThreeDWrapper>
          {/* here what we are doing is that we have some text inside <p> whose id="image-label". Now
                  since we might not want to repeat it so we did is tell the <Image/> that it is labeled
                  by the <p>'s text using aria-labelledby and the id of <p>. Accordingly, screen reader
                  will read that out */}
          <Image
            tabIndex={0}
            height={300}
            width={300}
            src="data:image/jpeg;base64,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"
            aria-labelledby="image-label"
            alt=""
            title="Picture of Sunrise"
          />
          <CardItem
            as="p"
            id="image-label"
            translateZ="50"
            className="text-xl font-bold text-white mt-2"
          >
            Sunrise is the one of the most beautiful natural phenomenon.
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-base max-w-sm mt-2 text-neutral-300"
          >
            The image is associated with the above label since using aria-label
            we have associated it with that and hence the screen reader will
            mention the label on focusing the image
          </CardItem>
        </ThreeDWrapper>
        <ThreeDWrapper>
          {/* similar as above just using figure and figcaption */}
          <figure className="focus:border-red-400 focus:border-2"//on focus, it should be visible
            tabIndex={0}>
            <Image
              height={300}
              width={300}
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRUYGBgYGBEYGBgYGRoYGBgRGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjEhISE0NDQ0MTQ0MTQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDE0NDQ0NDQ0ND80NDQ1NDE0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABAECAwUGB//EAEYQAAIBAgIHBQILBgMJAQAAAAABAgMRBBITITFBUWGRBVJxgaEUsQYVIjJCYnKSwdHwQ1OCstLhg8LxIzM0VHOEk6LiFv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACgRAAICAgICAgIBBQEAAAAAAAABAhEDEhNRIUExYQSRgSIyQqGxBf/aAAwDAQACEQMRAD8AtYq0NRUO8+hbRw7z6Hk2epqJMgbdOHeKOEdzQWGouBu4IpKCHsGpmmSmTYAseoXJzEJE2FY0iymyc5VRJUQsdFlItcpYlITCi6mWzIyyk2JHRopcyLmeUmwBRZtlXIgBhRZTZKqMoQPwI20z4k+0S4mBDkwoBlYmRPtDFMzDPyFSAcddldOxdSIuFIBnTviTHES4iqZdDpANRx01vNfjOe+z8hGxKgLVC8j3xjLuxASysBaxH5E2uRMZFNP4gq5oFDEZrejWEqe/MvBiWkRKmQykjpxhQ781/Df3A6FDdVfnFnNzGmkfBdCafZVDnssH82tHzTRK7PT2Th1EUawy736Ml2vY1FdDPxdLdKL8GR7BPh6oIU4PZL3m8cNHvvp+InN9lKC6MHgZ8CHhZ8Bz2WK2VH1NIxt+0fUjkZXGjmOhJBomdZVeMvc/wCVePFP+FBysNEcnRMnRvgdRThy6fkVcIvZIORj0Obo2Coye5nQ0HBoq6Elu6MOQOMVjgpv6LLfF0+AzFzjszLwLSxc19KQbsnQUfZ0+BaHZs3t1G3t0+97iV2hPj6IN5Bp9FqXZiWuWZ8kWnRgtlJecmV+NJcE/IPjZ9yIXJi1S9CtSlfZBLwuVhhvq9Rv41e6MV5f3LLtV70vJDuQtUKPDcuhmsLPcrj77U/WVFV2k+8+iGpSE4oU9ln3X0BYWfcHPjJ8fQq8c+PoG0g1RjHCT7qLrBy5FvbH3vQlYr6wbSFqiPY3yAt7XzQCtj1RxdA+KIeGfI3yciU1wL3ZeiFfZ5ciNCx264B8ngw3Y9EJ6Jl402NKEeZpolxZO41jFVBl1BjGgXEFQ5kuZagYqBrCFjVYZ8TRYV8SHJFa0ViiyhyLLCs0jhXzIckPwRCjxRdYeJMaDXEuovmTsJ0UeDT2XKSwL3e42i2aK+5hsyWqE3hZLcUdKa4nT18Q0ltobsNmcvNJb2Glmt51XWhv9xTJRlt9Lorf6Ft2mcuVaW+3RFXX4xj0OxLBUnvfUhdmU+LfmPdEbo4lSqt0UiilE7lTsmD2XXncRxHZjj83Xy/uVGaGpKQrClB711NHhVuYtOm1ti0Z5uDL/AJHSGJYfmVdFmekfeLKsyvIqRVwkVzPgbaRBcdsVGOdk6RmlzOTGiWg0nJAVuA/AqN9Kv0iM8RVT5k5uZnqbDUZokWTfFk5+Ymi0MJkqquAtmbJ18CWkUkNxqI2jViIRk+BvFX3ENFpDsakWbxmhCFNczdQ4OxmxSih6nOO8YhXic+NL6yNY4aT2NEOjCUYv5Z0I1IPgXVKD4CcMNPcjaCmvomcq9M55RS/tf+xlYSD2JFZdlRf0mi1Oc98TZVH3fUzc2vZg5zT8MSn2Wt0vUXfZ/wBZdTp1JPurqhGspciozfZrjyTfsXlgbcH5mEsOlu6Nl6tVrchWdd8PU3jZ1wUn8s0dKPGXX+xm090kvHX+AKrf6PqVlFPcWaKL9lZ5tudeVxV4qS+n6s2nTXAXnQ4XKi0NwNViZP6T95Eo5tblHzVn6GMYNbH1KzvxXU0QmqJnhlud/AylBreRkl/oyroPen1Ra+zOUSubmRpmt5OiW+66Gcqa73oWqIcWarEX2oFO+8xyfWQRp80VSJNs/MDPK+XUkVAYuogVZCVwua8aFsx+VSMla73bORtGtwZy0ycxLxlxmzsQqmsa/gcRVGXjW5mbxGqyHcjWvuRtGXL1OFGu1vNY4p8TOWF+jWM0zuRZrE4kcS+8/U3ji5d4yljZVWdqKXA3pzjzOJHGS73obU8XLijOWNmcsLaOzGul3uptDErvSRz6OOjvjfzHIY6n3fVHPKD6OWeNr/FjkMR9aXQ19ofF+cRWGJp95LxX4o0daC1uS8l/cycX0c0oefh/oipivs+aFp4j7PUZ9opd9ecWL1sRQW9Pwiyop9MuC81q/wBC06l9y6i85cYrqTWxVLdF+4Sq109it5nVGL6O7HBv1Rs5ru9GTpVz94hKsZuvzNVE34zoOtHiU0y4nOlXfEzlO+8axhSR0Jzg9/QWnTjulbxQnOZjKb4mkcZnKVD6g/qsHHw6nN0j4k+0y4mnGzPZDrfNehSXgKPEN8CNMUsbJckMS8DNsz074g6xerM20aXAz0oBqxWhe5FzLMGY6NDDc2uCZjmDMGhSkja5BnmJU+ZLiWpI0RpEyVV8SdJxZLgzWM0MQfM3jJiSqmka5nKDN4Tj2PQkzeMznQxJosSZSxs6Yyi/Z0oTNYTObDEI3jXRk4NF6p/B04TNsxzaeIOthez6tSN4xbXHYZvG38I5susPMnSMJSMJSDFtwk4yTT4MRniBqDNccbVr4N3MxnMXniTCeINI42y21EZnUMp1BWVcylVN44zCWRDMqhR1BaVQo5mixmEsqGHMrmF3UKuZagYyyDDqEZhfMGYpQM3kN8xOYWzBmK1JeQYzBmMMwXHqRuMZgF8xIahuUzriGdcUZOHIFBm2qOLlZrnXFdQzriYuDIyPgGqHzSN864oFUXFGDgyVB8A0Q+aRvnXFE6VcULZWTkYtUNZ5DCqLiupZVVxXUVyMlQZOiLX5Ml6GlVjxXUuq0e8uqEtGGUXGjSP5kl6H1iI96PVGkMTHvR6nNUAUCXhizaP/AKE4+kdyhi4XV5x+8kfTuze2sPoo2rU46krOUVa2rZc+MKL4FlIWOHG7QvyM0fyUlPxXR7v4YdqUKk45akG4qzakne+vajy1TGQ78fI5kncycSeFSk5P2XD854YKEF4XZ0J4qPeXUo8RHvLqIZCHA0WKJlL8+cvSHXWj3l1Kusu8uonkBwKWOJk/y5P0NaWPFdQdWPFdRRw5BoytEZv8mXQ1pI8V1Kyqx4rqK6MjIPRC55dDWlXFdQzriuopkBwDVE88uhtVI8UGkjxQpkDIPRE8z6G88e8upOlXFdRPRBkDVC5mOaSPFEiWiJHqHMzqKHIHHkNaN+8jRv8AW0ixCuTkRoxrRsh07BYCujJVMY0fP0DRBY6FnT8SVTGVT/WsFALBRF1AnRjGTWZyaTtvd35LaKwoy0YOBarUjFOTepX2b7Jt21itLtKEsu3XFzvutmlFa3vvHYHkdjOjIUEZLGwz5HLW8trc76vQc0a3CbKRhlDKMKly9wZOTFZXkXcSGhrRvh1/0K6P6v66BYmhaxVwGVB8CLPgOyaF8nIMgzkfAHAakArKHIjKNOH65lcn4bh2S0LOmUcBqUCJU+Y0woWyBkGMgZHtuFk0L5QyjDgyMnHUOwowy8ycnMY0YaP9ILFQvo0Bvk/VgDYKOxk5+n9w0fP0OdH4V4V7YzXlD+olfCjDPZfpb3XMql0a+Do6P9WIUP1qEn8I8NxfSf8ASWh8IcNvm1/DN/5QqXQ049jWR8PREOHL3C/x9he+/u1PyI//AEGG3OT9Pe/eFS6H/T2M5GTbw6/2FPj/AA9r/Kvq1X1++3qa0u2cPL9oo8pSa/CwmpdAnHsjEV1Dbbrx2Nq2y+o8T2h2pUdRS2OLll4WvZ2dlfWvK1uR1PhL2lCacYVm7NfJsmnd7YzSTTXndOx5e93+ZrCPi2Y5JeaR0J9pzlDLfZJTX2la23bv6sRhUa2bk4rlt/NsiErO5E7X1Xtz1PmaUZ2y9Os4yUuDT6a0vDUj0/ZHbEpWi1e13J2V3KV8qilH1b4HlLjlDtKcIZIyslLNaytstr1Xe17RONlRlqz31PEwbspR184/K36uOrX4NcUbuC5eh4fsXEXmszi5OV25SlGUr3ulJRlq2fJVr6tT3e9hbKrtLZq+VZLk3FHPOOrOqEtkYuHh1Bwtuj1W4Zyp7JJ+F2ZtR73vZFlNGKh9l6u9+BGj8H5o3jCL3rqyJUI8vUdiaF5U91o9f7FXB91X8d4y6EeTIdCP1ehSZNGCh9VehGR3u16oY0C+r0KezLZ8noFiownDwXmirguXVDLw64R+6yPZ/s9JfmGyChZRX6aLWXLqvUY0G6y3EKh9Vb9Y7RLiLuNt/uQZDb2Z8vVh7P08/wACrQnFmLj+rEuHgauhs/8Ar3Eqjbffr+YWKjLRr9W/MgY0fNdGAWFHHp9vYx5ssVLI/lWpZsuq/wArK9WphPtzETtCeGp1Lq6i6NSbceKjmernY8YoLgCVtmrw1azTjj0Ss8uz1FROW3s9L7FLEw/lkhOthrr5OFnB8UsQ/STZyY1pxVoznFcIykla/BMvSxlSNlCpUilf5s5xSv4MajXwDyJ/Ix7LLuTt9iXhwIdHx6NfgYUcdVj8yrUht+bOcdru9j3vWay7VrvW8RW3ftJrZs2Mfkm4/ZpSVNP5am/sTjD+aEhxYjBpO9Kq3b9+tT3alTRya+KnUtnnOdtmecpW8MzdiVjaigoZ3kV7RdmlfhfZtYnGxrJXx/wXxM1KTyxyrcszlu3t7eiMltLSK2KSIuyWiYJO921qdrK95bltVlz9C1KrlfzYS26pxUk9VvH1KXGASS3fpkE2CwAN4ClCT/2lTIr7oSm+N7Ky5beG7Weg9noJfJxzWr9xWjq8pHloSSabV1datl1w1F1Ue4zcW380bY8iiqqzvV56/k4nPzbrxfSUWYurP95fwnU/FHI0r1evNllVY1GiZTtnapTnJpKsl9qrKEV5yskdnB4Ctur4aafexM5dMskeb7OrUE5e0Kq1ZZFScFeWu+bOtW61uDK4bG0oyekoOcXK6tVlFxhw1fOfPV+USi38GuOUV5l5/k9jHsetf/fU19jFVoro7jEex52/4mUXvtiZS/mgeTnjcJlvClFSyyeWcasvlJq0VJVra7t5mlbLxaQlLtd/RpUI+FGEv51Iy45v3X8Gzy4o+r/k938WSWt42Sf/AFqbXRwRk8JK/wAnHSf3J+6J4ldvVo/MlGP2aVGPrGCLv4R4l7a9Tym4/wAth8WTsTz4ej1zweIfzcXN/wDbN+5krC4vdWT+1QqR/wArPFPtms9tat/5Z/1Gb7UqvbUqP/En/UUsU+1+jN58fTPc6DHrZKhLxjUj/kRV0+0OFB9fxPDfGVTvz+/P8yy7Rn35/fn+Y+OXa/RPNDpnsp0u0L3UYfwunb/2K5O0O50lh/yPIR7Vqd+f35/maLtmr+8qffn+Y9JfX6Fyw6f7PWQljltw7lzc6S/lZr7ViVtwl/8AEj+Z5an29XWytU85t++5tH4TYlft5PxhTfvgLSf0Pkx/Z3vbMT/yq+8v6gPPvt+q9slffelS/oANZdIneH2cMCziRkNznK3DMTlYODARGYnMGVkqDAZW5Ny2QMgDM7BJWNMqIlEBGbRCLMqgGWTLtXKJF0A0UcC6RYLABWxJNgJAq2RYtYLABTKRY0BjsTM2gNCqQxFQLJEMAIAAAATJuQguAEplsxQAAvmJM7AAGtwUi2j5ldFzQAQ5sFInRshwYATpCVUK5HwIsyQL6QMyK2AALMCoABaxVxJBgMjKWykElABNiLg2SFhYLBcLgMmxFibkZgAGVaJzBcBEATqITQCBorlLgwAzcSLGhJQGVgsatEZQAzAu0UaAAALAAxhAAEiAGAFAWkZsAJAImiJAAKNFKgAUBmi7ACQCQRABoAIZICAqWYAAARIkAGQwZIAIzYLeAABdbiZAA0BV7SwAIARYAKACGAAIAAAGf//Z"
              aria-describedby="image-caption"
              alt=""
              title="Picture of Sunrise"
            />
            <CardItem
              as="p"
              translateZ="50"
              className="text-xl font-bold  text-white mt-2"
            >
              <figcaption id="image-caption">
                Sunrise is the one of the most beautiful nature phenomenon.
              </figcaption>
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-base max-w-sm mt-2 text-neutral-300"
            >
              The image is associated with the above label since using
              aria-describedby. We are using figure and figcaption here. Make
              sure to check out the code on github.
            </CardItem>
          </figure>
        </ThreeDWrapper>
      </div>
    </div>
  );
};

export default Images;

interface ThreeDWrapperProps {
  children: ReactNode;
}
const ThreeDWrapper: React.FC<ThreeDWrapperProps> = ({ children }) => (
  <CardContainer className="inter-var w-[300px]">
    <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      {children}
    </CardBody>
  </CardContainer>
);
