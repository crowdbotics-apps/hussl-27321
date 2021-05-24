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
      <View style={styles.View_355_46}>
        <Text style={styles.Text_355_46}>John Tan</Text>
      </View>
      <View style={styles.View_355_50}>
        <Text style={styles.Text_355_50}>My Contributions</Text>
      </View>
      <View style={styles.View_355_51}>
        <Text style={styles.Text_355_51}>Updates</Text>
      </View>
      <View style={styles.View_355_52}>
        <Text style={styles.Text_355_52}>Summary</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dd4/297b/c5f800e1abb10640148322509456bcba"
        }}
        style={styles.ImageBackground_355_53}
      />
      <View style={styles.View_355_55}>
        <View style={styles.View_I355_55_50_1487}>
          <View style={styles.View_I355_55_49_886} />
          <View style={styles.View_I355_55_49_969}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9cb/609b/e8152c070ac291883ed1631414d94974"
              }}
              style={styles.ImageBackground_I355_55_49_965}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a205/7b69/85cc861e396345e8ad4f92379d8c9935"
            }}
            style={styles.ImageBackground_I355_55_49_983}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7133/adfe/41d2f23031eb44d769b9659655432c88"
            }}
            style={styles.ImageBackground_I355_55_49_999}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f35/a5ff/3ea6dd5f3c06941106417f9e5177b39a"
            }}
            style={styles.ImageBackground_I355_55_49_962}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a2d/63fc/408fb85c4bb6e63c8f409553279af0b4"
          }}
          style={styles.ImageBackground_I355_55_86_492}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17f3/0005/ac4965571d1d7b6e0c34ca0117ff03a7"
        }}
        style={styles.ImageBackground_355_70}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6a8/c6bf/3cec8f44916216343da131249fedf16b"
        }}
        style={styles.ImageBackground_355_71}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_355_46: {
    width: wp("47.199999999999996%"),
    minWidth: wp("47.199999999999996%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("12.158469945355192%")
  },
  Text_355_46: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_355_50: {
    width: wp("35.199999999999996%"),
    top: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%")
  },
  Text_355_50: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_355_51: {
    width: wp("17.333333333333336%"),
    top: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333333%")
  },
  Text_355_51: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_355_52: {
    width: wp("19.733333333333334%"),
    top: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%")
  },
  Text_355_52: {
    color: "rgba(255, 196, 51, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_355_53: {
    width: wp("19.2%"),
    height: hp("8.598961785487842e-7%"),
    top: hp("23.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%")
  },
  View_355_55: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.86338797814209%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I355_55_50_1487: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I355_55_49_886: {
    width: wp("100%"),
    height: hp("11.065573770491802%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I355_55_49_969: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("3.41530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.13333333333333%")
  },
  ImageBackground_I355_55_49_965: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I355_55_49_983: {
    width: wp("6.933333333333333%"),
    height: hp("3.5103552979849724%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%")
  },
  ImageBackground_I355_55_49_999: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_I355_55_49_962: {
    width: wp("7.1111109415690095%"),
    height: hp("3.278688524590164%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%")
  },
  ImageBackground_I355_55_86_492: {
    flexGrow: 1,
    width: wp("6.933333333333333%"),
    height: hp("3.196721259362059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.200000000000003%"),
    top: hp("3.6885245901639223%")
  },
  ImageBackground_355_70: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.93333333333332%"),
    top: hp("107.78688524590163%")
  },
  ImageBackground_355_71: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666666%"),
    top: hp("10.245901639344263%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
