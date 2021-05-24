import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_183_125}>
        <Text style={styles.Text_183_125}>John Tan</Text>
      </View>
      <View style={styles.View_183_419}>
        <View style={styles.View_I183_419_183_2} />
        <View style={styles.View_I183_419_183_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecad/97dd/fd3bc456f2416c0d831506a9eeb751c6"
            }}
            style={styles.ImageBackground_I183_419_183_4}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a2d/63fc/408fb85c4bb6e63c8f409553279af0b4"
          }}
          style={styles.ImageBackground_I183_419_183_16}
        />
        <View style={styles.View_I183_419_183_302}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f31/89a1/e2656eed01423039d3027bbcdf28091a"
            }}
            style={styles.ImageBackground_I183_419_183_303}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df9/a63d/9cb84191775c9ad96f06cc94de757391"
            }}
            style={styles.ImageBackground_I183_419_183_304}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f61e/e9c0/d187098a1363bad1307f336697e12e63"
        }}
        style={styles.ImageBackground_183_445}
      />
      <View style={styles.View_183_477}>
        <View style={styles.View_183_431}>
          <Text style={styles.Text_183_431}>You have submitted...</Text>
        </View>
        <View style={styles.View_183_471}>
          <View style={styles.View_183_470}>
            <View style={styles.View_183_473}>
              <View style={styles.View_183_437} />
              <View style={styles.View_183_472}>
                <View style={styles.View_183_432}>
                  <Text style={styles.Text_183_432}>15</Text>
                </View>
                <View style={styles.View_183_126}>
                  <Text style={styles.Text_183_126}>problems</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_183_469}>
            <View style={styles.View_183_475}>
              <View style={styles.View_183_438} />
              <View style={styles.View_183_434}>
                <Text style={styles.Text_183_434}>2</Text>
              </View>
              <View style={styles.View_183_433}>
                <Text style={styles.Text_183_433}>solutions</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_183_468}>
            <View style={styles.View_183_439} />
            <View style={styles.View_183_476}>
              <View style={styles.View_183_436}>
                <Text style={styles.Text_183_436}>2</Text>
              </View>
              <View style={styles.View_183_435}>
                <Text style={styles.Text_183_435}>pitches</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_183_478}>
        <Text style={styles.Text_183_478}>My posts</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_183_514}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_183_515}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_183_516}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_183_563}
      />
      <View style={styles.View_183_608}>
        <View style={styles.View_183_517}>
          <Text style={styles.Text_183_517}>Uber Problem</Text>
        </View>
        <View style={styles.View_183_529}>
          <View style={styles.View_I183_529_153_409}>
            <View style={styles.View_I183_529_153_410}>
              <Text style={styles.Text_I183_529_153_410}>325</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c9f/a3ff/fdcbad8c52a6e6cacf2de169deada191"
              }}
              style={styles.ImageBackground_I183_529_153_411}
            />
          </View>
        </View>
        <View style={styles.View_183_556}>
          <View style={styles.View_183_570}>
            <View style={styles.View_183_557} />
            <View style={styles.View_183_558}>
              <Text style={styles.Text_183_558}>P</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_183_595}>
        <View style={styles.View_183_564}>
          <Text style={styles.Text_183_564}>Designer Problem</Text>
        </View>
        <View style={styles.View_183_565}>
          <View style={styles.View_I183_565_153_409}>
            <View style={styles.View_I183_565_153_410}>
              <Text style={styles.Text_I183_565_153_410}>325</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c9f/a3ff/fdcbad8c52a6e6cacf2de169deada191"
              }}
              style={styles.ImageBackground_I183_565_153_411}
            />
          </View>
        </View>
        <View style={styles.View_183_590}>
          <View style={styles.View_183_591}>
            <View style={styles.View_183_592} />
            <View style={styles.View_183_593}>
              <Text style={styles.Text_183_593}>P</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_183_583}>
        <View style={styles.View_183_519}>
          <Text style={styles.Text_183_519}>Engineer Pitch</Text>
        </View>
        <View style={styles.View_183_531}>
          <View style={styles.View_I183_531_153_409}>
            <View style={styles.View_I183_531_153_410}>
              <Text style={styles.Text_I183_531_153_410}>325</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c9f/a3ff/fdcbad8c52a6e6cacf2de169deada191"
              }}
              style={styles.ImageBackground_I183_531_153_411}
            />
          </View>
        </View>
        <View style={styles.View_183_576}>
          <View style={styles.View_183_577}>
            <View style={styles.View_183_578} />
            <View style={styles.View_183_579}>
              <Text style={styles.Text_183_579}>P</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_183_596}
      />
      <View style={styles.View_183_597}>
        <View style={styles.View_183_598}>
          <Text style={styles.Text_183_598}>Engineer Pitch</Text>
        </View>
        <View style={styles.View_183_599}>
          <View style={styles.View_I183_599_153_409}>
            <View style={styles.View_I183_599_153_410}>
              <Text style={styles.Text_I183_599_153_410}>325</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c9f/a3ff/fdcbad8c52a6e6cacf2de169deada191"
              }}
              style={styles.ImageBackground_I183_599_153_411}
            />
          </View>
        </View>
        <View style={styles.View_183_600}>
          <View style={styles.View_183_601}>
            <View style={styles.View_183_602} />
            <View style={styles.View_183_603}>
              <Text style={styles.Text_183_603}>P</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_183_594}>
        <View style={styles.View_183_520}>
          <Text style={styles.Text_183_520}>Designer Solution</Text>
        </View>
        <View style={styles.View_183_532}>
          <View style={styles.View_I183_532_153_409}>
            <View style={styles.View_I183_532_153_410}>
              <Text style={styles.Text_I183_532_153_410}>325</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c9f/a3ff/fdcbad8c52a6e6cacf2de169deada191"
              }}
              style={styles.ImageBackground_I183_532_153_411}
            />
          </View>
        </View>
        <View style={styles.View_183_585}>
          <View style={styles.View_183_586}>
            <View style={styles.View_183_587}>
              <View style={styles.View_183_588} />
              <View style={styles.View_183_589}>
                <Text style={styles.Text_183_589}>S</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_183_607}>
        <View style={styles.View_183_569}>
          <View style={styles.View_183_559}>
            <View style={styles.View_183_560}>
              <View style={styles.View_183_561} />
              <View style={styles.View_183_562}>
                <Text style={styles.Text_183_562}>S</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_183_518}>
          <Text style={styles.Text_183_518}>Uber Solution</Text>
        </View>
        <View style={styles.View_183_530}>
          <View style={styles.View_I183_530_153_409}>
            <View style={styles.View_I183_530_153_410}>
              <Text style={styles.Text_I183_530_153_410}>325</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c9f/a3ff/fdcbad8c52a6e6cacf2de169deada191"
              }}
              style={styles.ImageBackground_I183_530_153_411}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_183_125: {
    width: wp("47.199999999999996%"),
    minWidth: wp("47.199999999999996%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("12.158469945355192%")
  },
  Text_183_125: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_183_419: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("99.86338797814209%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I183_419_183_2: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I183_419_183_3: {
    flexGrow: 1,
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I183_419_183_4: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I183_419_183_16: {
    flexGrow: 1,
    width: wp("6.933333333333333%"),
    height: hp("3.196721259362059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%"),
    top: hp("3.961748633879779%")
  },
  View_I183_419_183_302: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%"),
    top: hp("1.3661202185792263%")
  },
  ImageBackground_I183_419_183_303: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I183_419_183_304: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%")
  },
  ImageBackground_183_445: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.39999999999999%"),
    top: hp("12.158469945355192%")
  },
  View_183_477: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("16.530054644808743%"),
    minHeight: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("20.901639344262296%")
  },
  View_183_431: {
    width: wp("63.2%"),
    minWidth: wp("63.2%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_183_431: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_471: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.601092896174865%")
  },
  View_183_470: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_183_473: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_183_437: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(212, 73, 76, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_183_472: {
    width: wp("18.51014404296875%"),
    minWidth: wp("18.51014404296875%"),
    height: hp("7.470437346911821%"),
    minHeight: hp("7.470437346911821%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333334%"),
    top: hp("1.9367822532445338%")
  },
  View_183_432: {
    width: wp("12.240579223632812%"),
    minWidth: wp("12.240579223632812%"),
    minHeight: hp("5.533651445732742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.284049479166665%"),
    top: hp("0%")
  },
  Text_183_432: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_183_126: {
    width: wp("18.51014404296875%"),
    minWidth: wp("18.51014404296875%"),
    minHeight: hp("1.798436680778128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.672000405566937%")
  },
  Text_183_126: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_183_469: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.599999999999998%"),
    top: hp("0%")
  },
  View_183_475: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_183_438: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(91, 185, 142, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_183_434: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.13333333333334%"),
    top: hp("1.9125683060109253%")
  },
  Text_183_434: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_183_433: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("7.513661202185787%")
  },
  Text_183_433: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_183_468: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.199999999999996%"),
    top: hp("0%")
  },
  View_183_439: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_183_476: {
    width: wp("14.031883748372396%"),
    minWidth: wp("14.031883748372396%"),
    height: hp("7.470437346911821%"),
    minHeight: hp("7.470437346911821%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666671%"),
    top: hp("1.9367822532445338%")
  },
  View_183_436: {
    width: wp("8.06086934407552%"),
    minWidth: wp("8.06086934407552%"),
    minHeight: hp("5.533651445732742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%"),
    top: hp("0%")
  },
  Text_183_436: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_183_435: {
    width: wp("14.031883748372396%"),
    minWidth: wp("14.031883748372396%"),
    minHeight: hp("1.798436680778128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.672000405566937%")
  },
  Text_183_435: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_183_478: {
    width: wp("25.6%"),
    top: hp("43.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%")
  },
  Text_183_478: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_183_514: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("55.32786885245902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_183_515: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_183_516: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("70.90163934426229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_183_563: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("78.68852459016394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  View_183_608: {
    width: wp("81.534619140625%"),
    minWidth: wp("81.534619140625%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("49.72677595628415%")
  },
  View_183_517: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.399999999999999%"),
    top: hp("0.8196721311475414%")
  },
  Text_183_517: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_183_529: {
    width: wp("25.00128580729167%"),
    minWidth: wp("25.00128580729167%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.53333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I183_529_153_409: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333346%"),
    top: hp("0%")
  },
  View_I183_529_153_410: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601302083333323%")
  },
  Text_I183_529_153_410: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I183_529_153_411: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_556: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_570: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_183_557: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(212, 73, 76, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_183_558: {
    width: wp("1.866666666666667%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%")
  },
  Text_183_558: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_595: {
    width: wp("81.534619140625%"),
    minWidth: wp("81.534619140625%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("80.87431693989072%")
  },
  View_183_564: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.399999999999999%"),
    top: hp("0.8196721311475414%")
  },
  Text_183_564: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_183_565: {
    width: wp("25.00128580729167%"),
    minWidth: wp("25.00128580729167%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.53333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I183_565_153_409: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333346%"),
    top: hp("0%")
  },
  View_I183_565_153_410: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601302083333323%")
  },
  Text_I183_565_153_410: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I183_565_153_411: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_590: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_591: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_183_592: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(212, 73, 76, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_183_593: {
    width: wp("1.866666666666667%"),
    top: hp("0.6830601092895989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%")
  },
  Text_183_593: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_583: {
    width: wp("81.534619140625%"),
    minWidth: wp("81.534619140625%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("65.30054644808743%")
  },
  View_183_519: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.399999999999999%"),
    top: hp("0.8196721311475414%")
  },
  Text_183_519: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_183_531: {
    width: wp("25.00128580729167%"),
    minWidth: wp("25.00128580729167%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.53333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I183_531_153_409: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333346%"),
    top: hp("0%")
  },
  View_I183_531_153_410: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601302083333323%")
  },
  Text_I183_531_153_410: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I183_531_153_411: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_576: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_577: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_183_578: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_183_579: {
    width: wp("1.866666666666667%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%")
  },
  Text_183_579: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_183_596: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("86.47540983606558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  View_183_597: {
    width: wp("81.534619140625%"),
    minWidth: wp("81.534619140625%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("88.66120218579235%")
  },
  View_183_598: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.399999999999999%"),
    top: hp("0.8196721311475414%")
  },
  Text_183_598: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_183_599: {
    width: wp("25.00128580729167%"),
    minWidth: wp("25.00128580729167%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.53333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I183_599_153_409: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333346%"),
    top: hp("0%")
  },
  View_I183_599_153_410: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601302083333323%")
  },
  Text_I183_599_153_410: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I183_599_153_411: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_600: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_601: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_183_602: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_183_603: {
    width: wp("1.866666666666667%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%")
  },
  Text_183_603: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_594: {
    width: wp("81.80128580729166%"),
    minWidth: wp("81.80128580729166%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("73.08743169398907%")
  },
  View_183_520: {
    width: wp("31.2%"),
    minWidth: wp("31.2%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.399999999999999%"),
    top: hp("0.8196721311475414%")
  },
  Text_183_520: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_183_532: {
    width: wp("25.00128580729167%"),
    minWidth: wp("25.00128580729167%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I183_532_153_409: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("0%")
  },
  View_I183_532_153_410: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601302083333337%")
  },
  Text_I183_532_153_410: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I183_532_153_411: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_585: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_183_586: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_587: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_588: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(91, 185, 142, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_183_589: {
    width: wp("1.6%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%")
  },
  Text_183_589: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_607: {
    width: wp("81.534619140625%"),
    minWidth: wp("81.534619140625%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("57.513661202185794%")
  },
  View_183_569: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579212%")
  },
  View_183_559: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_560: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_561: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(91, 185, 142, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_183_562: {
    width: wp("1.6%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%")
  },
  Text_183_562: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_518: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.399999999999999%"),
    top: hp("0.8196721311475414%")
  },
  Text_183_518: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_183_530: {
    width: wp("25.00128580729167%"),
    minWidth: wp("25.00128580729167%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.53333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I183_530_153_409: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333346%"),
    top: hp("0%")
  },
  View_I183_530_153_410: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601302083333323%")
  },
  Text_I183_530_153_410: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I183_530_153_411: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
