// Copyright (c) 2013-2014 by SiegeLord
// 
// All rights reserved. Distributed under LGPL 3.0. For full terms see the file LICENSE.

use std::io::MemWriter;

use axes_common::*;
use datatype::*;
use options::*;

pub struct Axes3D
{
	priv common: AxesCommonData,
	priv z_ticks: MemWriter
}

impl Axes3D
{
	/// Draws a 3D surface
	pub fn surface<'l, T: DataType, X: Iterator<T>>(&'l mut self, mat: X, num_rows: i32, num_cols: i32, dimensions: Option<(f64, f64, f64, f64)>, options: &[PlotOption]) -> &'l mut Axes3D
	{
		self.common.plot_matrix(Pm3D, mat, num_rows, num_cols, dimensions, options);
		self
	}

	/// Sets the 3D view.
	///
	/// #Arguments:
	/// * `pitch` - Pitch, in degrees. Value of 0 is looking straight down on the XY plane, Z pointing out of the screen.
	/// * `yaw` - Yaw, in degrees. Value of 0 is looking at the XZ plane, Y point into the screen.
	pub fn set_view<'l>(&'l mut self, pitch: f64, yaw: f64) -> &'l mut Axes3D
	{
		writeln!(&mut self.common.commands, "set view {:.12e}{:.12e}", pitch, yaw);
		self
	}

	/// Sets the view to be a map. Useful for images and contour plots.
	pub fn set_view_map<'l>(&'l mut self) -> &'l mut Axes3D
	{
		writeln!(&mut self.common.commands, "set view map");
		self
	}

	/// Set the label for the Z axis
	/// # Arguments
	/// * `text` - Text of the label. Pass an empty string to hide the label
	/// * `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:
	///      * `Offset` - Specifies the offset of the label
	///      * `Font` - Specifies the font of the label
	///      * `TextColor` - Specifies the color of the label
	///      * `Rotate` - Specifies the rotation of the label
	///      * `Align` - Specifies how to align the label
	pub fn set_z_label<'l>(&'l mut self, text: &str, options: &[LabelOption]) -> &'l mut Axes3D
	{
		self.get_common_data_mut().set_label_common(ZLabel, text, options);
		self
	}

	/// Like `set_x_ticks` but for the Z axis.
	pub fn set_z_ticks<'l>(&'l mut self, incr: AutoOption<f64>, minor_intervals: u32, tick_options: &[TickOption], label_options: &[LabelOption]) -> &'l mut Axes3D
	{
		AxesCommonData::set_ticks_common(&mut self.z_ticks, ZTickAxis, incr, minor_intervals, tick_options, label_options);
		self
	}

	/// Like `set_x_ticks_custom` but for the the Y axis.
	pub fn set_z_ticks_custom<'l, T: DataType, TL: Iterator<Tick<T>>>(&'l mut self, ticks: TL, tick_options: &[TickOption], label_options: &[LabelOption]) -> &'l mut Axes3D
	{
		AxesCommonData::set_ticks_custom_common(&mut self.z_ticks, ZTickAxis, ticks, tick_options, label_options);
		self
	}

	/// Set the range of values for the Z axis
	/// # Arguments
	/// * `min` - Minimum Z value
	/// * `max` - Maximum Z value
	pub fn set_z_range<'l>(&'l mut self, min: AutoOption<f64>, max: AutoOption<f64>) -> &'l mut Axes3D
	{
		self.get_common_data_mut().set_range_common(ZTickAxis, min, max);
		self
	}
}

pub fn new_axes3d() -> Axes3D
{
	Axes3D{ common: AxesCommonData::new(), z_ticks: MemWriter::new() }
}

impl AxesCommonPrivate for Axes3D
{
	fn get_common_data_mut<'l>(&'l mut self) -> &'l mut AxesCommonData
	{
		&mut self.common
	}

	fn get_common_data<'l>(&'l self) -> &'l AxesCommonData
	{
		&self.common
	}
}

impl AxesCommon for Axes3D {}

pub trait Axes3DPrivate
{
	fn write_out(&self, writer: &mut Writer);
}

impl Axes3DPrivate for Axes3D
{
	fn write_out(&self, writer: &mut Writer)
	{
		if self.common.elems.len() == 0
		{
			return;
		}

		self.common.write_out_commands(writer);
		writer.write(self.z_ticks.get_ref());
		self.common.write_out_elements("splot", writer);
	}
}