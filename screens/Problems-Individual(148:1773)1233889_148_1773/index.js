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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32de/7700/df3f234c4bb4a96e33400fb285e751f2"
        }}
        style={styles.ImageBackground_148_1774}
      />
      <View style={styles.View_153_522} />
      <View style={styles.View_153_523}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec9/cd4d/d06dc5e29c86ed09dfcf167693416521"
          }}
          style={styles.ImageBackground_153_524}
        />
      </View>
      <View style={styles.View_153_527}>
        <View style={styles.View_153_528}>
          <Text style={styles.Text_153_528}>Airbnb Problem</Text>
        </View>
      </View>
      <View style={styles.View_153_535}>
        <View style={styles.View_153_536}>
          <Text style={styles.Text_153_536}>Solutions</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
          }}
          style={styles.ImageBackground_153_537}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
          }}
          style={styles.ImageBackground_153_538}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
          }}
          style={styles.ImageBackground_153_539}
        />
        <View style={styles.View_153_540}>
          <Text style={styles.Text_153_540}>Diaclean</Text>
        </View>
        <View style={styles.View_153_541}>
          <Text style={styles.Text_153_541}>Weather Or Not</Text>
        </View>
        <View style={styles.View_153_542}>
          <Text style={styles.Text_153_542}>Homies</Text>
        </View>
        <View style={styles.View_153_543}>
          <Text style={styles.Text_153_543}>Proudly Aussie</Text>
        </View>
        <View style={styles.View_153_544}>
          <View style={styles.View_153_545} />
          <View style={styles.View_153_546}>
            <Text style={styles.Text_153_546}>Submit a solution</Text>
          </View>
          <View style={styles.View_153_547}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed36/8aab/0695908756b9e693832d437c1a44d6eb"
              }}
              style={styles.ImageBackground_153_548}
            />
          </View>
        </View>
        <View style={styles.View_153_421}>
          <View style={styles.View_153_409}>
            <View style={styles.View_153_410}>
              <Text style={styles.Text_153_410}>325</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c9f/a3ff/fdcbad8c52a6e6cacf2de169deada191"
              }}
              style={styles.ImageBackground_153_411}
            />
          </View>
        </View>
        <View style={styles.View_153_552}>
          <View style={styles.View_I153_552_153_409}>
            <View style={styles.View_I153_552_153_410}>
              <Text style={styles.Text_I153_552_153_410}>325</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c9f/a3ff/fdcbad8c52a6e6cacf2de169deada191"
              }}
              style={styles.ImageBackground_I153_552_153_411}
            />
          </View>
        </View>
        <View style={styles.View_153_553}>
          <View style={styles.View_I153_553_153_409}>
            <View style={styles.View_I153_553_153_410}>
              <Text style={styles.Text_I153_553_153_410}>325</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c9f/a3ff/fdcbad8c52a6e6cacf2de169deada191"
              }}
              style={styles.ImageBackground_I153_553_153_411}
            />
          </View>
        </View>
        <View style={styles.View_153_554}>
          <View style={styles.View_I153_554_153_409}>
            <View style={styles.View_I153_554_153_410}>
              <Text style={styles.Text_I153_554_153_410}>325</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c9f/a3ff/fdcbad8c52a6e6cacf2de169deada191"
              }}
              style={styles.ImageBackground_I153_554_153_411}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_153_605}>
        <View style={styles.View_I153_605_148_2006} />
        <View style={styles.View_I153_605_148_2007}>
          <Text style={styles.Text_I153_605_148_2007}>3d</Text>
        </View>
        <View style={styles.View_I153_605_153_400}>
          <View style={styles.View_I153_605_148_2010}>
            <Text style={styles.Text_I153_605_148_2010}>
              Price is important concern for customers booking travel online.
              Hotels leave you disconnected from the city and its culture. No
              easy way exists to book a room with a local or become a host.
            </Text>
          </View>
          <View style={styles.View_I153_605_148_2011}>
            <Text style={styles.Text_I153_605_148_2011}>Problem</Text>
          </View>
        </View>
        <View style={styles.View_I153_605_153_399}>
          <View style={styles.View_I153_605_148_2021} />
          <View style={styles.View_I153_605_148_2022}>
            <Text style={styles.Text_I153_605_148_2022}>CONSUMER</Text>
          </View>
        </View>
        <View style={styles.View_I153_605_148_2035}>
          <View style={styles.View_I153_605_148_2036}>
            <View style={styles.View_I153_605_148_2037} />
            <View style={styles.View_I153_605_148_2038}>
              <Text style={styles.Text_I153_605_148_2038}>PROBLEM</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I153_605_153_830}>
          <View style={styles.View_I153_605_153_402}>
            <View style={styles.View_I153_605_148_2016}>
              <Text style={styles.Text_I153_605_148_2016}>Brian Chesky</Text>
            </View>
            <View style={styles.View_I153_605_148_2017}>
              <Text style={styles.Text_I153_605_148_2017}>POSTED BY</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb16/d6a8/1b598e9b811255e54a62f90de8a3a35f"
              }}
              style={styles.ImageBackground_I153_605_148_2018}
            />
          </View>
          <View style={styles.View_I153_605_153_403}>
            <View style={styles.View_I153_605_153_258}>
              <View style={styles.View_I153_605_153_259}>
                <Text style={styles.Text_I153_605_153_259}>4</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c038/bd38/8baa72b1790904a3aed960c7d5a4537e"
                }}
                style={styles.ImageBackground_I153_605_153_260}
              />
            </View>
            <View style={styles.View_I153_605_153_262}>
              <View style={styles.View_I153_605_153_263}>
                <Text style={styles.Text_I153_605_153_263}>325</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72fb/8e4d/eed175f4b2386d18fec4f397c5236392"
                }}
                style={styles.ImageBackground_I153_605_153_264}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_148_1774: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("104.0983606557377%"),
    minHeight: hp("104.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896176%")
  },
  View_153_522: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("8.333333333333332%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_153_523: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("9.426229508196721%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_153_524: {
    width: wp("3.2006797790527344%"),
    height: hp("1.6396565515486918%"),
    top: hp("0.8194834808182847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5996419270833329%")
  },
  View_153_527: {
    width: wp("83.67285970052083%"),
    minWidth: wp("83.67285970052083%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("10.382513661202186%")
  },
  View_153_528: {
    width: wp("83.67285970052083%"),
    minWidth: wp("83.67285970052083%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_153_528: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_535: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("35.38251366120219%"),
    minHeight: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("51.775956284153004%")
  },
  View_153_536: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("0.5464480874316919%")
  },
  Text_153_536: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_153_537: {
    width: wp("89.33333333333333%"),
    height: hp("7.765494379891806e-15%"),
    top: hp("12.841530054644814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_153_538: {
    width: wp("89.33333333333333%"),
    height: hp("1.5530988759783612e-14%"),
    top: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_153_539: {
    width: wp("89.33333333333333%"),
    height: hp("1.5530988759783612e-14%"),
    top: hp("29.50819672131147%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_540: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("7.786885245901637%")
  },
  Text_153_540: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_153_541: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("16.12021857923498%")
  },
  Text_153_541: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_153_542: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("24.453551912568308%")
  },
  Text_153_542: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_153_543: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("32.78688524590164%")
  },
  Text_153_543: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_153_544: {
    width: wp("38.4%"),
    minWidth: wp("38.4%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.93333333333333%"),
    top: hp("0%")
  },
  View_153_545: {
    width: wp("38.4%"),
    minWidth: wp("38.4%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 196, 51, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_153_546: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999994%"),
    top: hp("0%")
  },
  Text_153_546: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_547: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_153_548: {
    width: wp("2.8000000000000003%"),
    height: hp("1.4344262295081966%"),
    top: hp("0.23907103825136033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.46666666666666856%")
  },
  View_153_421: {
    width: wp("25.00128580729167%"),
    minWidth: wp("25.00128580729167%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.199999999999996%"),
    top: hp("6.967213114754095%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_153_409: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333346%"),
    top: hp("0%")
  },
  View_153_410: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601302083333323%")
  },
  Text_153_410: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_153_411: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_552: {
    width: wp("25.00128580729167%"),
    minWidth: wp("25.00128580729167%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.199999999999996%"),
    top: hp("15.300546448087438%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I153_552_153_409: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333346%"),
    top: hp("0%")
  },
  View_I153_552_153_410: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601302083333323%")
  },
  Text_I153_552_153_410: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I153_552_153_411: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_553: {
    width: wp("25.00128580729167%"),
    minWidth: wp("25.00128580729167%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.199999999999996%"),
    top: hp("23.633879781420767%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I153_553_153_409: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333346%"),
    top: hp("0%")
  },
  View_I153_553_153_410: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601302083333323%")
  },
  Text_I153_553_153_410: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I153_553_153_411: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_554: {
    width: wp("25.00128580729167%"),
    minWidth: wp("25.00128580729167%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.199999999999996%"),
    top: hp("31.967213114754095%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I153_554_153_409: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333346%"),
    top: hp("0%")
  },
  View_I153_554_153_410: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601302083333323%")
  },
  Text_I153_554_153_410: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I153_554_153_411: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_605: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("36.33879781420765%"),
    minHeight: hp("36.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("16.530054644808743%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I153_605_148_2006: {
    flexGrow: 1,
    width: wp("89.06666666666668%"),
    height: hp("32.37704918032787%"),
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
  View_I153_605_148_2007: {
    flexGrow: 1,
    width: wp("20.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666666%"),
    top: hp("2.7322404371584703%")
  },
  Text_I153_605_148_2007: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_605_153_400: {
    flexGrow: 1,
    width: wp("79.2%"),
    height: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("7.513661202185791%")
  },
  View_I153_605_148_2010: {
    width: wp("79.2%"),
    top: hp("2.8688524590163986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I153_605_148_2010: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_605_148_2011: {
    width: wp("15.2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I153_605_148_2011: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_I153_605_153_399: {
    flexGrow: 1,
    width: wp("20.8%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%"),
    top: hp("2.1857923497267784%")
  },
  View_I153_605_148_2021: {
    width: wp("20.8%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 196, 51, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_I153_605_148_2022: {
    width: wp("15.733333333333333%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%")
  },
  Text_I153_605_148_2022: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_605_148_2035: {
    flexGrow: 1,
    width: wp("18.666666666666668%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("2.1857923497267784%")
  },
  View_I153_605_148_2036: {
    width: wp("18.666666666666668%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_605_148_2037: {
    width: wp("18.666666666666668%"),
    height: hp("3.1420765027322406%"),
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
  View_I153_605_148_2038: {
    width: wp("13.066666666666665%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%")
  },
  Text_I153_605_148_2038: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_605_153_830: {
    flexGrow: 1,
    width: wp("79.606982421875%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("25.27322404371585%")
  },
  View_I153_605_153_402: {
    width: wp("28.26666666666667%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_605_148_2016: {
    width: wp("18.666666666666668%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999998%")
  },
  Text_I153_605_148_2016: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_605_148_2017: {
    width: wp("15.733333333333333%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999998%")
  },
  Text_I153_605_148_2017: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I153_605_148_2018: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_605_153_403: {
    width: wp("30.80698038736979%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.8%")
  },
  View_I153_605_153_258: {
    width: wp("10.922666422526042%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.884309895833333%")
  },
  View_I153_605_153_259: {
    width: wp("2.7306666056315105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.191992187500006%")
  },
  Text_I153_605_153_259: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I153_605_153_260: {
    width: wp("5.461333211263021%"),
    height: hp("2.7978141451142524%"),
    top: hp("0.6994570539297271%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_605_153_262: {
    width: wp("15.617645263671875%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_605_153_263: {
    width: wp("7.168000284830729%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.449641927083327%")
  },
  Text_I153_605_153_263: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I153_605_153_264: {
    width: wp("5.7189783732096355%"),
    height: hp("2.7978141451142524%"),
    top: hp("0.6994570539297271%"),
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
