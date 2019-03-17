var N=null,E="",T="t",U="u",searchIndex={};
var R=["gnuplot","If the axes are drawn on the border, this specifies…","Plot a 2D scatter-plot with a point standing in for each…","points","lines_points","A combination of lines and points methods (drawn in that…","autooption","contourstyle","figure","axes2d","Like `set_x_ticks_custom` but for the the Y axis.","try_from","borrow_mut","try_into","result","type_id","to_owned","clone_into","borrow","typeid","palettetype","set_pos_grid","Set the position of the axes on the figure using grid…","Set the position of the axes on the figure using screen…","set_size","Set the size of the axes # Arguments * `w` - Width. Ranges…","set_aspect_ratio","Set the aspect ratio of the axes # Arguments * `ratio` -…","set_x_label","Set the label for the X axis # Arguments * `text` - Text…","set_y_label","Like `set_x_label`, but for the Y axis","set_cb_label","Like `set_x_label`, but for the color bar","set_title","Set the title for the axes # Arguments * `text` - Text of…","Adds a label to the plot, with an optional marker. #…","set_x_ticks","Sets the properties of the ticks on the X axis.","set_y_ticks","Like `set_x_ticks` but for the Y axis.","set_cb_ticks","Like `set_x_ticks` but for the color bar axis.","set_x_ticks_custom","Sets ticks on the X axis with specified labels at…","set_y_ticks_custom","set_cb_ticks_custom","Like `set_x_ticks_custom` but for the the color bar axis.","set_x_range","Set the range of values for the X axis.","set_y_range","Set the range of values for the Y axis.","set_x_reverse","Sets X axis to reverse. # Arguments * `reverse` - Boolean,…","set_y_reverse","Sets Y axis to reverse. # Arguments * `reverse` - Boolean,…","set_cb_range","Set the range of values for the color bar axis.","set_x_log","Sets the X axis be logarithmic. Note that the range must…","option","set_y_log","Sets the Y axis be logarithmic. Note that the range must…","set_cb_log","Sets the color bar axis be logarithmic. Note that the…","set_x_grid","Shows the grid on the X axis.","set_y_grid","Shows the grid on the Y axis.","set_cb_grid","Shows the grid on the color bar axis.","set_grid_options","Set the grid options.","set_x_time","Sets the X axis be time.","set_y_time","Sets the Y axis be time. Note that the range must be…","set_cb_time","Sets the color bar axis be time. Note that the range must…","set_margins","Sets the margins of the plot.","set_palette","Sets the palette used for 3D surface and image plots","set_custom_palette","Sets a custom palette used for 3D surface and image plots.…","Coordinate","PlotOption","FillRegionType","AlignType","DashType","ArrowheadType","AutoOption","LabelOption","TickOption","BorderLocation2D","MarginSide","LegendOption","ContourStyle","PaletteType","AxesCommon"];

searchIndex[R[0]]={"doc":"A simple gnuplot controller.","i":[[3,"Axes2D",R[0],"2D axes that is used for drawing 2D plots",N,N],[3,"Axes3D",E,"3D axes that is used for drawing 3D plots",N,N],[3,"Figure",E,"A figure that may contain multiple axes",N,N],[4,R[85],E,"Specifies how to interpret the coordinate passed to a…",N,N],[13,"Graph",E,"Coordinates are done relative to a graph (i.e. an axis…",0,N],[13,"Axis",E,"Coordinates match those on the axes. You'd use this to…",0,N],[4,R[86],E,"An enumeration of plot options you can supply to plotting…",N,N],[13,"PointSymbol",E,"Sets the symbol used for points. The valid characters are…",1,N],[13,"PointSize",E,"Sets the size of the points. The size acts as a…",1,N],[13,"Caption",E,"Sets the caption of the plot element. Set to empty to hide…",1,N],[13,"LineWidth",E,"Sets the width of lines.",1,N],[13,"Color",E,"Sets the color of the plot element. The passed string can…",1,N],[13,"BorderColor",E,"Sets the color of the border of a filled plot (if it has…",1,N],[13,"LineStyle",E,"Sets the style of the line. Note that not all gnuplot…",1,N],[13,"FillAlpha",E,"Sets the transparency of a filled plot. `0.0` - fully…",1,N],[13,"FillRegion",E,"Sets the fill region. See FillRegion for the available…",1,N],[13,"ArrowType",E,"Sets what an arrowhead looks like",1,N],[13,"ArrowSize",E,"Sets the size of the arrowhead. This is specified in the…",1,N],[13,"WhiskerBars",E,"Width of the whisker bars (as a fraction of the box width)…",1,N],[4,R[87],E,"An enumeration of possible fill regions",N,N],[13,"Above",E,E,2,N],[13,"Below",E,E,2,N],[13,"Between",E,E,2,N],[4,R[88],E,"An enumeration of possible text and label alignments",N,N],[13,"AlignLeft",E,E,3,N],[13,"AlignRight",E,E,3,N],[13,"AlignCenter",E,E,3,N],[13,"AlignTop",E,E,3,N],[13,"AlignBottom",E,E,3,N],[4,R[89],E,"An enumeration of possible dash styles",N,N],[13,"Solid",E,E,4,N],[13,"SmallDot",E,E,4,N],[13,"Dot",E,E,4,N],[13,"Dash",E,E,4,N],[13,"DotDash",E,E,4,N],[13,"DotDotDash",E,E,4,N],[4,R[90],E,"An enumeration of possible arrow head styles",N,N],[13,"Open",E,"An arrow head shaped like a 'V'",5,N],[13,"Closed",E,"An arrow head shaped like an outlined triangle",5,N],[13,"Filled",E,"An arrow head shaped like a filled triangle",5,N],[13,"NoArrow",E,"No arrow head",5,N],[4,R[91],E,"An enumeration of something that can either be fixed (e.g.…",N,N],[13,"Fix",E,"Fixes the value to a specific value",6,N],[13,"Auto",E,"Lets the value scale automatically",6,N],[4,R[92],E,"An enumeration of label options that control label…",N,N],[13,"TextOffset",E,"Sets the offset of the label in characters",7,N],[13,"Font",E,"Sets the font of the label. The string specifies the font…",7,N],[13,"TextColor",E,"Sets the color of the label text. The passed string can be…",7,N],[13,"Rotate",E,"Rotates the label by a certain number of degrees",7,N],[13,"TextAlign",E,"Sets the horizontal alignment of the label text (default…",7,N],[13,"MarkerSymbol",E,"Sets a marker for the label. By default no marker is…",7,N],[13,"MarkerColor",E,"Sets the color of the marker. The passed string can be a…",7,N],[13,"MarkerSize",E,"Sets the size of the marker. The size acts as a…",7,N],[4,R[93],E,"An enumeration of axis tick options",N,N],[13,"OnAxis",E,"Specifies whether the ticks are drawn at the borders of…",8,N],[13,"Mirror",E,R[1],8,N],[13,"Inward",E,R[1],8,N],[13,"MinorScale",E,"Sets the scale of the minor ticks",8,N],[13,"MajorScale",E,"Sets the scale of the major ticks",8,N],[13,"Format",E,"Format of the tick labels, e.g. \"%.1f ms\" will produces…",8,N],[4,"Tick",E,"Specifies a type of axis tick",N,N],[13,"Major",E,"Major ticks have position and an optional label. The label…",9,N],[13,"Minor",E,"Minor ticks only have position",9,N],[4,R[94],E,"Plot border locations",N,N],[13,"Bottom",E,E,10,N],[13,"Left",E,E,10,N],[13,"Top",E,E,10,N],[13,"Right",E,E,10,N],[4,R[95],E,"Plot margins",N,N],[13,"MarginTop",E,E,11,N],[13,"MarginBottom",E,E,11,N],[13,"MarginLeft",E,E,11,N],[13,"MarginRight",E,E,11,N],[4,R[96],E,"Legend options",N,N],[13,"Reverse",E,"Puts curve samples to the left of the label",12,N],[13,"Invert",E,"Displays legend entries in opposite order",12,N],[13,"Horizontal",E,"Makes the legend horizontal (default is vertical)",12,N],[13,"Placement",E,"Specifies the location of the legend. The first argument…",12,N],[13,"Title",E,"Title of the legend",12,N],[13,"MaxRows",E,"Specifies the maximum number of rows, when the legend is…",12,N],[13,"MaxCols",E,"Specifies the maximum number of columns, when the legend…",12,N],[4,R[97],E,"Specifies how the contours are drawn",N,N],[13,"Linear",E,"Draw lines between points of equal value",13,N],[13,"Cubic",E,"Draw somewhat smoother curves between points with equal…",13,N],[13,"Spline",E,"Draw an even smoother curve, this time approximating the…",13,N],[4,R[98],E,"Specifies what sort of palette to use",N,N],[13,"Gray",E,"Use a gray palette with a specified gamma",14,N],[13,"Formula",E,"Use a palette with that uses a predefined formula for each…",14,N],[13,"CubeHelix",E,"Use a cube helix palette, with a certain start (in…",14,N],[11,"set_border",E,"Sets the properties of the plot border",15,N],[11,"set_x_axis",E,"Sets the properties of x axis.",15,N],[11,"set_y_axis",E,"Like `set_x_axis` but for the y axis.",15,N],[11,"arrow",E,"Adds an arrow to the plot. The arrow is drawn from `(x1,…",15,N],[11,"set_legend",E,"Specifies the location and other properties of the legend…",15,N],[11,"lines",E,"Plot a 2D scatter-plot with lines connecting each data…",15,N],[11,R[3],E,R[2],15,N],[11,R[4],E,R[5],15,N],[11,"x_error_bars",E,R[2],15,N],[11,"y_error_bars",E,R[2],15,N],[11,"x_error_lines",E,R[2],15,N],[11,"y_error_lines",E,R[2],15,N],[11,"fill_between",E,"Plot a 2D scatter-plot of two curves (bound by `y_lo` and…",15,N],[11,"boxes",E,"Plot a 2D scatter-plot using boxes of automatic width. Box…",15,N],[11,"boxes_set_width",E,"Plot a 2D scatter-plot using boxes of set (per box) width.…",15,N],[11,"box_and_whisker",E,"Plot a 2D box-and-whisker plot using boxes of automatic…",15,N],[11,"box_and_whisker_set_width",E,"Plot a 2D box-and-whisker plot using boxes of set width.",15,N],[11,"image",E,"Draws an image from a rectangular array of data by…",15,N],[11,"surface",E,"Draws a 3D surface from a rectangular array of data by…",16,N],[11,R[3],E,"Plot a 3D scatter-plot with a point standing in for each…",16,N],[11,"lines",E,"Plot a 3D scatter-plot with lines connecting each data…",16,N],[11,R[4],E,R[5],16,N],[11,"set_view",E,"Sets the 3D view.",16,[[["self"],["f64"],["f64"]],["self"]]],[11,"set_view_map",E,"Sets the view to be a map. Useful for images and contour…",16,[[["self"]],["self"]]],[11,"set_z_label",E,"Set the label for the Z axis",16,N],[11,"set_z_ticks",E,"Like `set_x_ticks` but for the Z axis.",16,N],[11,"set_z_ticks_custom",E,R[10],16,N],[11,"set_z_range",E,"Set the range of values for the Z axis",16,[[["self"],[R[6],["f64"]],[R[6],["f64"]]],["self"]]],[11,"set_z_reverse",E,"Sets z axis to reverse.",16,[[["self"],["bool"]],["self"]]],[11,"set_z_log",E,"Sets the Z axis be logarithmic. Note that the range must…",16,[[["self"],[R[60],["f64"]]],["self"]]],[11,"set_z_grid",E,"Shows the grid on the Z axis.",16,[[["self"],["bool"]],["self"]]],[11,"set_z_time",E,"Sets the Z axis be time. Note that the range must be…",16,[[["self"],["bool"]],["self"]]],[11,"show_contours",E,"Show contours (lines of equal Z value) at automatically…",16,[[["self"],["bool"],["bool"],[R[7]],[R[6],["str"]],[R[6],["u32"]]],["self"]]],[11,"show_contours_custom",E,"Show contours (lines of equal Z value) at specific levels.",16,[[["self"],["bool"],["bool"],[R[7]],[R[6],["str"]],["tc"]],["self"]]],[11,"new",E,"Creates a new figure",17,[[],[R[8]]]],[11,"set_terminal",E,"Sets the terminal for gnuplot to use, as well as the file…",17,[[["self"],["str"],["str"]],[R[8]]]],[11,"set_post_commands",E,"Sets commands to send to gnuplot after all the plotting…",17,[[["self"],["str"]],[R[8]]]],[11,"set_pre_commands",E,"Sets commands to send to gnuplot before any plotting…",17,[[["self"],["str"]],[R[8]]]],[11,R[9],E,"Creates a set of 2D axes",17,[[["self"]],[R[9]]]],[11,"axes3d",E,"Creates a set of 3D axes",17,[[["self"]],["axes3d"]]],[11,"show",E,"Launch a gnuplot process, if it hasn't been spawned…",17,[[["self"]],[R[8]]]],[11,"close",E,"Closes the gnuplot process.",17,[[["self"]],[R[8]]]],[11,"clear_axes",E,"Clears all axes on this figure.",17,[[["self"]],[R[8]]]],[11,"echo",E,"Echo the commands that if piped to a gnuplot process would…",17,[[["self"],[T]],[R[8]]]],[11,"echo_to_file",E,"Save to a file the the commands that if piped to a gnuplot…",17,[[["self"],["str"]],[R[8]]]],[11,"to_int",E,E,4,[[["self"]],["i32"]]],[11,"map",E,"Same as `Option::map`",6,[[["self"],["f"]],[R[6]]]],[17,"GRAY",E,"A gray palette",N,N],[17,"COLOR",E,"Default Gnuplot palette",N,N],[17,"RAINBOW",E,"Classic rainbow palette with terrible perceptual properties",N,N],[17,"HOT",E,"A black body palette",N,N],[17,"HELIX",E,"A nice default for a cube helix",N,N],[8,R[99],E,E,N,N],[11,R[21],E,R[22],18,[[["self"],["u32"],["u32"],["u32"]],["self"]]],[11,"set_pos",E,R[23],18,[[["self"],["f64"],["f64"]],["self"]]],[11,R[24],E,R[25],18,[[["self"],["f64"],["f64"]],["self"]]],[11,R[26],E,R[27],18,[[["self"],[R[6],["f64"]]],["self"]]],[11,R[28],E,R[29],18,N],[11,R[30],E,R[31],18,N],[11,R[32],E,R[33],18,N],[11,R[34],E,R[35],18,N],[11,"label",E,R[36],18,N],[11,R[37],E,R[38],18,N],[11,R[39],E,R[40],18,N],[11,R[41],E,R[42],18,N],[11,R[43],E,R[44],18,N],[11,R[45],E,R[10],18,N],[11,R[46],E,R[47],18,N],[11,R[48],E,R[49],18,[[["self"],[R[6],["f64"]],[R[6],["f64"]]],["self"]]],[11,R[50],E,R[51],18,[[["self"],[R[6],["f64"]],[R[6],["f64"]]],["self"]]],[11,R[52],E,R[53],18,[[["self"],["bool"]],["self"]]],[11,R[54],E,R[55],18,[[["self"],["bool"]],["self"]]],[11,R[56],E,R[57],18,[[["self"],[R[6],["f64"]],[R[6],["f64"]]],["self"]]],[11,R[58],E,R[59],18,[[["self"],[R[60],["f64"]]],["self"]]],[11,R[61],E,R[62],18,[[["self"],[R[60],["f64"]]],["self"]]],[11,R[63],E,R[64],18,[[["self"],[R[60],["f64"]]],["self"]]],[11,R[65],E,R[66],18,[[["self"],["bool"]],["self"]]],[11,R[67],E,R[68],18,[[["self"],["bool"]],["self"]]],[11,R[69],E,R[70],18,[[["self"],["bool"]],["self"]]],[11,R[71],E,R[72],18,N],[11,R[73],E,R[74],18,[[["self"],["bool"]],["self"]]],[11,R[75],E,R[76],18,[[["self"],["bool"]],["self"]]],[11,R[77],E,R[78],18,[[["self"],["bool"]],["self"]]],[11,R[79],E,R[80],18,N],[11,R[81],E,R[82],18,[[["self"],[R[20]]],["self"]]],[11,R[83],E,R[84],18,[[["self"],[T]],["self"]]],[8,"DataType",E,E,N,N],[10,"get",E,E,19,[[["self"]],["f64"]]],[11,"from",E,E,15,[[[T]],[T]]],[11,"into",E,E,15,[[["self"]],[U]]],[11,R[11],E,E,15,[[[U]],[R[14]]]],[11,R[18],E,E,15,[[["self"]],[T]]],[11,R[15],E,E,15,[[["self"]],[R[19]]]],[11,R[12],E,E,15,[[["self"]],[T]]],[11,R[13],E,E,15,[[["self"]],[R[14]]]],[11,"from",E,E,16,[[[T]],[T]]],[11,"into",E,E,16,[[["self"]],[U]]],[11,R[11],E,E,16,[[[U]],[R[14]]]],[11,R[18],E,E,16,[[["self"]],[T]]],[11,R[15],E,E,16,[[["self"]],[R[19]]]],[11,R[12],E,E,16,[[["self"]],[T]]],[11,R[13],E,E,16,[[["self"]],[R[14]]]],[11,"from",E,E,17,[[[T]],[T]]],[11,"into",E,E,17,[[["self"]],[U]]],[11,R[11],E,E,17,[[[U]],[R[14]]]],[11,R[18],E,E,17,[[["self"]],[T]]],[11,R[15],E,E,17,[[["self"]],[R[19]]]],[11,R[12],E,E,17,[[["self"]],[T]]],[11,R[13],E,E,17,[[["self"]],[R[14]]]],[11,"to_string",E,E,0,[[["self"]],["string"]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[["self"]],[U]]],[11,R[16],E,E,0,[[["self"]],[T]]],[11,R[17],E,E,0,N],[11,R[11],E,E,0,[[[U]],[R[14]]]],[11,R[18],E,E,0,[[["self"]],[T]]],[11,R[15],E,E,0,[[["self"]],[R[19]]]],[11,R[12],E,E,0,[[["self"]],[T]]],[11,R[13],E,E,0,[[["self"]],[R[14]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[["self"]],[U]]],[11,R[16],E,E,1,[[["self"]],[T]]],[11,R[17],E,E,1,N],[11,R[11],E,E,1,[[[U]],[R[14]]]],[11,R[18],E,E,1,[[["self"]],[T]]],[11,R[15],E,E,1,[[["self"]],[R[19]]]],[11,R[12],E,E,1,[[["self"]],[T]]],[11,R[13],E,E,1,[[["self"]],[R[14]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[["self"]],[U]]],[11,R[16],E,E,2,[[["self"]],[T]]],[11,R[17],E,E,2,N],[11,R[11],E,E,2,[[[U]],[R[14]]]],[11,R[18],E,E,2,[[["self"]],[T]]],[11,R[15],E,E,2,[[["self"]],[R[19]]]],[11,R[12],E,E,2,[[["self"]],[T]]],[11,R[13],E,E,2,[[["self"]],[R[14]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[["self"]],[U]]],[11,R[16],E,E,3,[[["self"]],[T]]],[11,R[17],E,E,3,N],[11,R[11],E,E,3,[[[U]],[R[14]]]],[11,R[18],E,E,3,[[["self"]],[T]]],[11,R[15],E,E,3,[[["self"]],[R[19]]]],[11,R[12],E,E,3,[[["self"]],[T]]],[11,R[13],E,E,3,[[["self"]],[R[14]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[["self"]],[U]]],[11,R[16],E,E,4,[[["self"]],[T]]],[11,R[17],E,E,4,N],[11,R[11],E,E,4,[[[U]],[R[14]]]],[11,R[18],E,E,4,[[["self"]],[T]]],[11,R[15],E,E,4,[[["self"]],[R[19]]]],[11,R[12],E,E,4,[[["self"]],[T]]],[11,R[13],E,E,4,[[["self"]],[R[14]]]],[11,"from",E,E,5,[[[T]],[T]]],[11,"into",E,E,5,[[["self"]],[U]]],[11,R[16],E,E,5,[[["self"]],[T]]],[11,R[17],E,E,5,N],[11,R[11],E,E,5,[[[U]],[R[14]]]],[11,R[18],E,E,5,[[["self"]],[T]]],[11,R[15],E,E,5,[[["self"]],[R[19]]]],[11,R[12],E,E,5,[[["self"]],[T]]],[11,R[13],E,E,5,[[["self"]],[R[14]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,"into",E,E,6,[[["self"]],[U]]],[11,R[16],E,E,6,[[["self"]],[T]]],[11,R[17],E,E,6,N],[11,R[11],E,E,6,[[[U]],[R[14]]]],[11,R[18],E,E,6,[[["self"]],[T]]],[11,R[15],E,E,6,[[["self"]],[R[19]]]],[11,R[12],E,E,6,[[["self"]],[T]]],[11,R[13],E,E,6,[[["self"]],[R[14]]]],[11,"from",E,E,7,[[[T]],[T]]],[11,"into",E,E,7,[[["self"]],[U]]],[11,R[16],E,E,7,[[["self"]],[T]]],[11,R[17],E,E,7,N],[11,R[11],E,E,7,[[[U]],[R[14]]]],[11,R[18],E,E,7,[[["self"]],[T]]],[11,R[15],E,E,7,[[["self"]],[R[19]]]],[11,R[12],E,E,7,[[["self"]],[T]]],[11,R[13],E,E,7,[[["self"]],[R[14]]]],[11,"from",E,E,8,[[[T]],[T]]],[11,"into",E,E,8,[[["self"]],[U]]],[11,R[16],E,E,8,[[["self"]],[T]]],[11,R[17],E,E,8,N],[11,R[11],E,E,8,[[[U]],[R[14]]]],[11,R[18],E,E,8,[[["self"]],[T]]],[11,R[15],E,E,8,[[["self"]],[R[19]]]],[11,R[12],E,E,8,[[["self"]],[T]]],[11,R[13],E,E,8,[[["self"]],[R[14]]]],[11,"from",E,E,9,[[[T]],[T]]],[11,"into",E,E,9,[[["self"]],[U]]],[11,R[11],E,E,9,[[[U]],[R[14]]]],[11,R[18],E,E,9,[[["self"]],[T]]],[11,R[15],E,E,9,[[["self"]],[R[19]]]],[11,R[12],E,E,9,[[["self"]],[T]]],[11,R[13],E,E,9,[[["self"]],[R[14]]]],[11,"from",E,E,10,[[[T]],[T]]],[11,"into",E,E,10,[[["self"]],[U]]],[11,R[16],E,E,10,[[["self"]],[T]]],[11,R[17],E,E,10,N],[11,R[11],E,E,10,[[[U]],[R[14]]]],[11,R[18],E,E,10,[[["self"]],[T]]],[11,R[15],E,E,10,[[["self"]],[R[19]]]],[11,R[12],E,E,10,[[["self"]],[T]]],[11,R[13],E,E,10,[[["self"]],[R[14]]]],[11,"from",E,E,11,[[[T]],[T]]],[11,"into",E,E,11,[[["self"]],[U]]],[11,R[16],E,E,11,[[["self"]],[T]]],[11,R[17],E,E,11,N],[11,R[11],E,E,11,[[[U]],[R[14]]]],[11,R[18],E,E,11,[[["self"]],[T]]],[11,R[15],E,E,11,[[["self"]],[R[19]]]],[11,R[12],E,E,11,[[["self"]],[T]]],[11,R[13],E,E,11,[[["self"]],[R[14]]]],[11,"from",E,E,12,[[[T]],[T]]],[11,"into",E,E,12,[[["self"]],[U]]],[11,R[16],E,E,12,[[["self"]],[T]]],[11,R[17],E,E,12,N],[11,R[11],E,E,12,[[[U]],[R[14]]]],[11,R[18],E,E,12,[[["self"]],[T]]],[11,R[15],E,E,12,[[["self"]],[R[19]]]],[11,R[12],E,E,12,[[["self"]],[T]]],[11,R[13],E,E,12,[[["self"]],[R[14]]]],[11,"from",E,E,13,[[[T]],[T]]],[11,"into",E,E,13,[[["self"]],[U]]],[11,R[16],E,E,13,[[["self"]],[T]]],[11,R[17],E,E,13,N],[11,R[11],E,E,13,[[[U]],[R[14]]]],[11,R[18],E,E,13,[[["self"]],[T]]],[11,R[15],E,E,13,[[["self"]],[R[19]]]],[11,R[12],E,E,13,[[["self"]],[T]]],[11,R[13],E,E,13,[[["self"]],[R[14]]]],[11,"from",E,E,14,[[[T]],[T]]],[11,"into",E,E,14,[[["self"]],[U]]],[11,R[16],E,E,14,[[["self"]],[T]]],[11,R[17],E,E,14,N],[11,R[11],E,E,14,[[[U]],[R[14]]]],[11,R[18],E,E,14,[[["self"]],[T]]],[11,R[15],E,E,14,[[["self"]],[R[19]]]],[11,R[12],E,E,14,[[["self"]],[T]]],[11,R[13],E,E,14,[[["self"]],[R[14]]]],[11,"clone",E,E,0,[[["self"]],["coordinate"]]],[11,"clone",E,E,1,[[["self"]],["plotoption"]]],[11,"clone",E,E,2,[[["self"]],["fillregiontype"]]],[11,"clone",E,E,3,[[["self"]],["aligntype"]]],[11,"clone",E,E,4,[[["self"]],["dashtype"]]],[11,"clone",E,E,5,[[["self"]],["arrowheadtype"]]],[11,"clone",E,E,6,[[["self"]],[R[6]]]],[11,"clone",E,E,7,[[["self"]],["labeloption"]]],[11,"clone",E,E,8,[[["self"]],["tickoption"]]],[11,"clone",E,E,10,[[["self"]],["borderlocation2d"]]],[11,"clone",E,E,11,[[["self"]],["marginside"]]],[11,"clone",E,E,12,[[["self"]],["legendoption"]]],[11,"clone",E,E,13,[[["self"]],[R[7]]]],[11,"clone",E,E,14,[[["self"]],[R[20]]]],[11,"fmt",E,E,0,[[["self"],["formatter"]],[R[14]]]],[11,R[21],E,R[22],18,[[["self"],["u32"],["u32"],["u32"]],["self"]]],[11,"set_pos",E,R[23],18,[[["self"],["f64"],["f64"]],["self"]]],[11,R[24],E,R[25],18,[[["self"],["f64"],["f64"]],["self"]]],[11,R[26],E,R[27],18,[[["self"],[R[6],["f64"]]],["self"]]],[11,R[28],E,R[29],18,N],[11,R[30],E,R[31],18,N],[11,R[32],E,R[33],18,N],[11,R[34],E,R[35],18,N],[11,"label",E,R[36],18,N],[11,R[37],E,R[38],18,N],[11,R[39],E,R[40],18,N],[11,R[41],E,R[42],18,N],[11,R[43],E,R[44],18,N],[11,R[45],E,R[10],18,N],[11,R[46],E,R[47],18,N],[11,R[48],E,R[49],18,[[["self"],[R[6],["f64"]],[R[6],["f64"]]],["self"]]],[11,R[50],E,R[51],18,[[["self"],[R[6],["f64"]],[R[6],["f64"]]],["self"]]],[11,R[52],E,R[53],18,[[["self"],["bool"]],["self"]]],[11,R[54],E,R[55],18,[[["self"],["bool"]],["self"]]],[11,R[56],E,R[57],18,[[["self"],[R[6],["f64"]],[R[6],["f64"]]],["self"]]],[11,R[58],E,R[59],18,[[["self"],[R[60],["f64"]]],["self"]]],[11,R[61],E,R[62],18,[[["self"],[R[60],["f64"]]],["self"]]],[11,R[63],E,R[64],18,[[["self"],[R[60],["f64"]]],["self"]]],[11,R[65],E,R[66],18,[[["self"],["bool"]],["self"]]],[11,R[67],E,R[68],18,[[["self"],["bool"]],["self"]]],[11,R[69],E,R[70],18,[[["self"],["bool"]],["self"]]],[11,R[71],E,R[72],18,N],[11,R[73],E,R[74],18,[[["self"],["bool"]],["self"]]],[11,R[75],E,R[76],18,[[["self"],["bool"]],["self"]]],[11,R[77],E,R[78],18,[[["self"],["bool"]],["self"]]],[11,R[79],E,R[80],18,N],[11,R[81],E,R[82],18,[[["self"],[R[20]]],["self"]]],[11,R[83],E,R[84],18,[[["self"],[T]],["self"]]]],"p":[[4,R[85]],[4,R[86]],[4,R[87]],[4,R[88]],[4,R[89]],[4,R[90]],[4,R[91]],[4,R[92]],[4,R[93]],[4,"Tick"],[4,R[94]],[4,R[95]],[4,R[96]],[4,R[97]],[4,R[98]],[3,"Axes2D"],[3,"Axes3D"],[3,"Figure"],[8,R[99]],[8,"DataType"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);