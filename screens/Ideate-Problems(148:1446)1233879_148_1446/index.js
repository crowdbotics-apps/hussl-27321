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
      <View style={styles.View_148_2896}>
        <View style={styles.View_I148_2896_148_2748} />
        <View style={styles.View_I148_2896_148_2749}>
          <Text style={styles.Text_I148_2896_148_2749}>Uber Problems</Text>
        </View>
        <View style={styles.View_I148_2896_148_2750}>
          <Text style={styles.Text_I148_2896_148_2750}>3d</Text>
        </View>
        <View style={styles.View_I148_2896_148_2751}>
          <Text style={styles.Text_I148_2896_148_2751}>
            Most use aging and inefficient technology like radio dispatching.
            Always the same car models...
          </Text>
        </View>
        <View style={styles.View_I148_2896_148_2752}>
          <View style={styles.View_I148_2896_148_2753}>
            <Text style={styles.Text_I148_2896_148_2753}>2</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3917/6369/9bd24b368c077a96ddff93ada39d30f3"
            }}
            style={styles.ImageBackground_I148_2896_148_2754}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6b3/c7af/f2269a4f067f745f3f07a71701f80db0"
          }}
          style={styles.ImageBackground_I148_2896_148_2756}
        />
        <View style={styles.View_I148_2896_148_2757}>
          <View style={styles.View_I148_2896_148_2758}>
            <Text style={styles.Text_I148_2896_148_2758}>586</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
            }}
            style={styles.ImageBackground_I148_2896_148_2759}
          />
        </View>
        <View style={styles.View_I148_2896_148_2868}>
          <Text style={styles.Text_I148_2896_148_2868}>John Tan</Text>
        </View>
      </View>
      <View style={styles.View_148_2869}>
        <View style={styles.View_I148_2869_148_2713} />
        <View style={styles.View_I148_2869_148_2714}>
          <Text style={styles.Text_I148_2869_148_2714}>Airbnb Problems</Text>
        </View>
        <View style={styles.View_I148_2869_148_2715}>
          <Text style={styles.Text_I148_2869_148_2715}>3d</Text>
        </View>
        <View style={styles.View_I148_2869_148_2716}>
          <Text style={styles.Text_I148_2869_148_2716}> </Text>
        </View>
        <View style={styles.View_I148_2869_148_2731}>
          <View style={styles.View_I148_2869_148_2727}>
            <Text style={styles.Text_I148_2869_148_2727}>2</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/269f/0241/cf8f74ab5c5e8d91bbb7d89e72d2b5d8"
            }}
            style={styles.ImageBackground_I148_2869_148_2728}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6b3/c7af/f2269a4f067f745f3f07a71701f80db0"
          }}
          style={styles.ImageBackground_I148_2869_148_2730}
        />
        <View style={styles.View_I148_2869_148_2732}>
          <View style={styles.View_I148_2869_148_2719}>
            <Text style={styles.Text_I148_2869_148_2719}>325</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
            }}
            style={styles.ImageBackground_I148_2869_148_2711}
          />
        </View>
        <View style={styles.View_I148_2869_148_2840}>
          <Text style={styles.Text_I148_2869_148_2840}>John Tan</Text>
        </View>
        <View style={styles.View_I148_2869_265_0}>
          <Text style={styles.Text_I148_2869_265_0}>
            Most use aging and inefficient technology like radio dispatching.
            Always the same car models...
          </Text>
        </View>
      </View>
      <View style={styles.View_148_1449}>
        <Text style={styles.Text_148_1449}>Ideate</Text>
      </View>
      <View style={styles.View_148_1467}>
        <Text style={styles.Text_148_1467}>CONSUMER</Text>
      </View>
      <View style={styles.View_148_1468}>
        <Text style={styles.Text_148_1468}>EDUCATION</Text>
      </View>
      <View style={styles.View_148_1469}>
        <Text style={styles.Text_148_1469}>ARTIFICIAL INTELLIGENCE</Text>
      </View>
      <View style={styles.View_148_1471}>
        <Text style={styles.Text_148_1471}>Solutions</Text>
      </View>
      <View style={styles.View_148_1472}>
        <Text style={styles.Text_148_1472}>Problems</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dd4/297b/c5f800e1abb10640148322509456bcba"
        }}
        style={styles.ImageBackground_148_1473}
      />
      <View style={styles.View_148_1475}>
        <Text style={styles.Text_148_1475}>Pitches</Text>
      </View>
      <View style={styles.View_148_2762}>
        <View style={styles.View_148_2713} />
        <View style={styles.View_148_2714}>
          <Text style={styles.Text_148_2714}>Airbnb Problems</Text>
        </View>
        <View style={styles.View_148_2715}>
          <Text style={styles.Text_148_2715}>3d</Text>
        </View>
        <View style={styles.View_148_2716}>
          <Text style={styles.Text_148_2716}> </Text>
        </View>
        <View style={styles.View_148_2731}>
          <View style={styles.View_148_2727}>
            <Text style={styles.Text_148_2727}>2</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/269f/0241/cf8f74ab5c5e8d91bbb7d89e72d2b5d8"
            }}
            style={styles.ImageBackground_148_2728}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6b3/c7af/f2269a4f067f745f3f07a71701f80db0"
          }}
          style={styles.ImageBackground_148_2730}
        />
        <View style={styles.View_148_2732}>
          <View style={styles.View_148_2719}>
            <Text style={styles.Text_148_2719}>325</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
            }}
            style={styles.ImageBackground_148_2711}
          />
        </View>
        <View style={styles.View_148_2840}>
          <Text style={styles.Text_148_2840}>John Tan</Text>
        </View>
        <View style={styles.View_265_0}>
          <Text style={styles.Text_265_0}>
            Most use aging and inefficient technology like radio dispatching.
            Always the same car models...
          </Text>
        </View>
      </View>
      <View style={styles.View_148_2867}>
        <View style={styles.View_148_2748} />
        <View style={styles.View_148_2749}>
          <Text style={styles.Text_148_2749}>Uber Problems</Text>
        </View>
        <View style={styles.View_148_2750}>
          <Text style={styles.Text_148_2750}>3d</Text>
        </View>
        <View style={styles.View_148_2751}>
          <Text style={styles.Text_148_2751}>
            Most use aging and inefficient technology like radio dispatching.
            Always the same car models...
          </Text>
        </View>
        <View style={styles.View_148_2752}>
          <View style={styles.View_148_2753}>
            <Text style={styles.Text_148_2753}>2</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3917/6369/9bd24b368c077a96ddff93ada39d30f3"
            }}
            style={styles.ImageBackground_148_2754}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6b3/c7af/f2269a4f067f745f3f07a71701f80db0"
          }}
          style={styles.ImageBackground_148_2756}
        />
        <View style={styles.View_148_2757}>
          <View style={styles.View_148_2758}>
            <Text style={styles.Text_148_2758}>586</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
            }}
            style={styles.ImageBackground_148_2759}
          />
        </View>
        <View style={styles.View_148_2868}>
          <Text style={styles.Text_148_2868}>John Tan</Text>
        </View>
      </View>
      <View style={styles.View_148_2883}>
        <View style={styles.View_I148_2883_148_2748} />
        <View style={styles.View_I148_2883_148_2749}>
          <Text style={styles.Text_I148_2883_148_2749}>Uber Problems</Text>
        </View>
        <View style={styles.View_I148_2883_148_2750}>
          <Text style={styles.Text_I148_2883_148_2750}>3d</Text>
        </View>
        <View style={styles.View_I148_2883_148_2751}>
          <Text style={styles.Text_I148_2883_148_2751}>
            Most use aging and inefficient technology like radio dispatching.
            Always the same car models...
          </Text>
        </View>
        <View style={styles.View_I148_2883_148_2752}>
          <View style={styles.View_I148_2883_148_2753}>
            <Text style={styles.Text_I148_2883_148_2753}>2</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3917/6369/9bd24b368c077a96ddff93ada39d30f3"
            }}
            style={styles.ImageBackground_I148_2883_148_2754}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6b3/c7af/f2269a4f067f745f3f07a71701f80db0"
          }}
          style={styles.ImageBackground_I148_2883_148_2756}
        />
        <View style={styles.View_I148_2883_148_2757}>
          <View style={styles.View_I148_2883_148_2758}>
            <Text style={styles.Text_I148_2883_148_2758}>586</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
            }}
            style={styles.ImageBackground_I148_2883_148_2759}
          />
        </View>
        <View style={styles.View_I148_2883_148_2868}>
          <Text style={styles.Text_I148_2883_148_2868}>John Tan</Text>
        </View>
      </View>
      <View style={styles.View_148_2763}>
        <View style={styles.View_I148_2763_148_2713} />
        <View style={styles.View_I148_2763_148_2714}>
          <Text style={styles.Text_I148_2763_148_2714}>Airbnb Problems</Text>
        </View>
        <View style={styles.View_I148_2763_148_2715}>
          <Text style={styles.Text_I148_2763_148_2715}>3d</Text>
        </View>
        <View style={styles.View_I148_2763_148_2716}>
          <Text style={styles.Text_I148_2763_148_2716}> </Text>
        </View>
        <View style={styles.View_I148_2763_148_2731}>
          <View style={styles.View_I148_2763_148_2727}>
            <Text style={styles.Text_I148_2763_148_2727}>2</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/269f/0241/cf8f74ab5c5e8d91bbb7d89e72d2b5d8"
            }}
            style={styles.ImageBackground_I148_2763_148_2728}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6b3/c7af/f2269a4f067f745f3f07a71701f80db0"
          }}
          style={styles.ImageBackground_I148_2763_148_2730}
        />
        <View style={styles.View_I148_2763_148_2732}>
          <View style={styles.View_I148_2763_148_2719}>
            <Text style={styles.Text_I148_2763_148_2719}>325</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
            }}
            style={styles.ImageBackground_I148_2763_148_2711}
          />
        </View>
        <View style={styles.View_I148_2763_148_2840}>
          <Text style={styles.Text_I148_2763_148_2840}>John Tan</Text>
        </View>
        <View style={styles.View_I148_2763_265_0}>
          <Text style={styles.Text_I148_2763_265_0}>
            Most use aging and inefficient technology like radio dispatching.
            Always the same car models...
          </Text>
        </View>
      </View>
      <View style={styles.View_183_308}>
        <View style={styles.View_183_2} />
        <View style={styles.View_183_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acc1/bc07/d0659af62ba20de29b5a604198a24139"
            }}
            style={styles.ImageBackground_183_4}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a2d/63fc/408fb85c4bb6e63c8f409553279af0b4"
          }}
          style={styles.ImageBackground_183_16}
        />
        <View style={styles.View_183_302}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f31/89a1/e2656eed01423039d3027bbcdf28091a"
            }}
            style={styles.ImageBackground_183_303}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df9/a63d/9cb84191775c9ad96f06cc94de757391"
            }}
            style={styles.ImageBackground_183_304}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f61e/e9c0/d187098a1363bad1307f336697e12e63"
        }}
        style={styles.ImageBackground_183_444}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_148_2896: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    minHeight: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.53333333333333%"),
    top: hp("80.05464480874316%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I148_2896_148_2748: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
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
  View_I148_2896_148_2749: {
    flexGrow: 1,
    width: wp("30.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("2.0491803278688536%")
  },
  Text_I148_2896_148_2749: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_I148_2896_148_2750: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.8%"),
    top: hp("2.0491803278688536%")
  },
  Text_I148_2896_148_2750: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I148_2896_148_2751: {
    flexGrow: 1,
    width: wp("56.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("5.191256830601091%")
  },
  Text_I148_2896_148_2751: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I148_2896_148_2752: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.66796875%"),
    top: hp("14.071038251366119%")
  },
  View_I148_2896_148_2753: {
    width: wp("2.1333333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%")
  },
  Text_I148_2896_148_2753: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I148_2896_148_2754: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I148_2896_148_2756: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("14.071038251366119%")
  },
  View_I148_2896_148_2757: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.19999999999999%"),
    top: hp("14.071038251366119%")
  },
  View_I148_2896_148_2758: {
    width: wp("5.866666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.334635416666686%")
  },
  Text_I148_2896_148_2758: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I148_2896_148_2759: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I148_2896_148_2868: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666671%"),
    top: hp("14.754098360655746%")
  },
  Text_I148_2896_148_2868: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2869: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    minHeight: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("80.05464480874316%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I148_2869_148_2713: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
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
  View_I148_2869_148_2714: {
    flexGrow: 1,
    width: wp("34.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("2.0491803278688536%")
  },
  Text_I148_2869_148_2714: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_I148_2869_148_2715: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.79999999999999%"),
    top: hp("2.0491803278688536%")
  },
  Text_I148_2869_148_2715: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I148_2869_148_2716: {
    flexGrow: 1,
    width: wp("56.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("7.923497267759572%")
  },
  Text_I148_2869_148_2716: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I148_2869_148_2731: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.66796875%"),
    top: hp("14.071038251366119%")
  },
  View_I148_2869_148_2727: {
    width: wp("2.1333333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3999999999999915%")
  },
  Text_I148_2869_148_2727: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I148_2869_148_2728: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I148_2869_148_2730: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("14.071038251366119%")
  },
  View_I148_2869_148_2732: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("14.071038251366119%")
  },
  View_I148_2869_148_2719: {
    width: wp("5.866666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.334635416666657%")
  },
  Text_I148_2869_148_2719: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I148_2869_148_2711: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I148_2869_148_2840: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666664%"),
    top: hp("14.617486338797818%")
  },
  Text_I148_2869_148_2840: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I148_2869_265_0: {
    flexGrow: 1,
    width: wp("56.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("5.601092896174876%")
  },
  Text_I148_2869_265_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1449: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("12.158469945355192%")
  },
  Text_148_1449: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_148_1467: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("27.595628415300546%")
  },
  Text_148_1467: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1468: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("52.18579234972678%")
  },
  Text_148_1468: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1469: {
    width: wp("38.13333333333333%"),
    minWidth: wp("38.13333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("76.775956284153%")
  },
  Text_148_1469: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1471: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("20.62841530054645%")
  },
  Text_148_1471: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_148_1472: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("20.62841530054645%")
  },
  Text_148_1472: {
    color: "rgba(255, 196, 51, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_148_1473: {
    width: wp("19.2%"),
    height: hp("0%"),
    top: hp("23.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  View_148_1475: {
    width: wp("14.666666666666666%"),
    top: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.4%")
  },
  Text_148_1475: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_148_2762: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    minHeight: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("30.737704918032787%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_148_2713: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
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
  View_148_2714: {
    flexGrow: 1,
    width: wp("34.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("2.04918032786885%")
  },
  Text_148_2714: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_148_2715: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.79999999999999%"),
    top: hp("2.04918032786885%")
  },
  Text_148_2715: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2716: {
    flexGrow: 1,
    width: wp("56.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("7.923497267759561%")
  },
  Text_148_2716: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2731: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.66796875%"),
    top: hp("14.071038251366122%")
  },
  View_148_2727: {
    width: wp("2.1333333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3999999999999915%")
  },
  Text_148_2727: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_148_2728: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_148_2730: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("14.071038251366122%")
  },
  View_148_2732: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("14.071038251366122%")
  },
  View_148_2719: {
    width: wp("5.866666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.334635416666657%")
  },
  Text_148_2719: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_148_2711: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_148_2840: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666664%"),
    top: hp("14.617486338797814%")
  },
  Text_148_2840: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_265_0: {
    flexGrow: 1,
    width: wp("56.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("5.601092896174865%")
  },
  Text_265_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2867: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    minHeight: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.53333333333333%"),
    top: hp("30.737704918032787%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_148_2748: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
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
  View_148_2749: {
    flexGrow: 1,
    width: wp("30.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("2.04918032786885%")
  },
  Text_148_2749: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_148_2750: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.8%"),
    top: hp("2.04918032786885%")
  },
  Text_148_2750: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2751: {
    flexGrow: 1,
    width: wp("56.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("5.191256830601095%")
  },
  Text_148_2751: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2752: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.66796875%"),
    top: hp("14.071038251366122%")
  },
  View_148_2753: {
    width: wp("2.1333333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%")
  },
  Text_148_2753: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_148_2754: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_148_2756: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("14.071038251366122%")
  },
  View_148_2757: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.19999999999999%"),
    top: hp("14.071038251366122%")
  },
  View_148_2758: {
    width: wp("5.866666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.334635416666686%")
  },
  Text_148_2758: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_148_2759: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_148_2868: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666671%"),
    top: hp("14.754098360655735%")
  },
  Text_148_2868: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2883: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    minHeight: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.53333333333333%"),
    top: hp("55.32786885245902%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I148_2883_148_2748: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
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
  View_I148_2883_148_2749: {
    flexGrow: 1,
    width: wp("30.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("2.0491803278688465%")
  },
  Text_I148_2883_148_2749: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_I148_2883_148_2750: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.8%"),
    top: hp("2.0491803278688465%")
  },
  Text_I148_2883_148_2750: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I148_2883_148_2751: {
    flexGrow: 1,
    width: wp("56.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("5.191256830601084%")
  },
  Text_I148_2883_148_2751: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I148_2883_148_2752: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.66796875%"),
    top: hp("14.071038251366119%")
  },
  View_I148_2883_148_2753: {
    width: wp("2.1333333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%")
  },
  Text_I148_2883_148_2753: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I148_2883_148_2754: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I148_2883_148_2756: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("14.071038251366119%")
  },
  View_I148_2883_148_2757: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.19999999999999%"),
    top: hp("14.071038251366119%")
  },
  View_I148_2883_148_2758: {
    width: wp("5.866666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.334635416666686%")
  },
  Text_I148_2883_148_2758: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I148_2883_148_2759: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I148_2883_148_2868: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666671%"),
    top: hp("14.754098360655732%")
  },
  Text_I148_2883_148_2868: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2763: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    minHeight: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("55.32786885245902%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I148_2763_148_2713: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
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
  View_I148_2763_148_2714: {
    flexGrow: 1,
    width: wp("34.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("2.0491803278688465%")
  },
  Text_I148_2763_148_2714: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_I148_2763_148_2715: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.79999999999999%"),
    top: hp("2.0491803278688465%")
  },
  Text_I148_2763_148_2715: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I148_2763_148_2716: {
    flexGrow: 1,
    width: wp("56.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("7.923497267759558%")
  },
  Text_I148_2763_148_2716: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I148_2763_148_2731: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.66796875%"),
    top: hp("14.071038251366119%")
  },
  View_I148_2763_148_2727: {
    width: wp("2.1333333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3999999999999915%")
  },
  Text_I148_2763_148_2727: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I148_2763_148_2728: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I148_2763_148_2730: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("14.071038251366119%")
  },
  View_I148_2763_148_2732: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("14.071038251366119%")
  },
  View_I148_2763_148_2719: {
    width: wp("5.866666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.334635416666657%")
  },
  Text_I148_2763_148_2719: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I148_2763_148_2711: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I148_2763_148_2840: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666664%"),
    top: hp("14.617486338797818%")
  },
  Text_I148_2763_148_2840: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I148_2763_265_0: {
    flexGrow: 1,
    width: wp("56.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("5.601092896174862%")
  },
  Text_I148_2763_265_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_308: {
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
  View_183_2: {
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
  View_183_3: {
    flexGrow: 1,
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_183_4: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_183_16: {
    flexGrow: 1,
    width: wp("6.933333333333333%"),
    height: hp("3.196721259362059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%"),
    top: hp("3.961748633879779%")
  },
  View_183_302: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%"),
    top: hp("1.3661202185792263%")
  },
  ImageBackground_183_303: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_183_304: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%")
  },
  ImageBackground_183_444: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.39999999999999%"),
    top: hp("12.158469945355192%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
