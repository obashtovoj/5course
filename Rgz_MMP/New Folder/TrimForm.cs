using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace VideoWinForms
{
    public partial class TrimForm : Form
    {
        string _inputPath;
        string _outputPath;
        public TrimForm(string inputPath, string outputPath, TimeSpan maxDuration)
        {
            InitializeComponent();
            
            _inputPath = inputPath;
            _outputPath = outputPath;
            timeStart.MinDate = timeEnd.MinDate = new DateTime(2001, 1, 1, 0, 0, 0);
            timeStart.MaxDate = timeEnd.MaxDate = new DateTime(2001, 1, 1, maxDuration.Hours, maxDuration.Minutes, maxDuration.Seconds);
        }

        private void btOk_Click(object sender, EventArgs e)
        {
            var brightness = ((double)trackBar1.Value / 100).ToString(System.Globalization.CultureInfo.InvariantCulture);
            var log = Media.Trim(_inputPath, _outputPath, timeStart.Value.TimeOfDay, timeEnd.Value.TimeOfDay, 
                brightness);
            if (MessageBox.Show("Показать информацию?", "", MessageBoxButtons.YesNo, MessageBoxIcon.Question) == System.Windows.Forms.DialogResult.Yes)
                MessageBox.Show(log);
            this.Close();
        }

        private void trackBar1_ValueChanged(object sender, EventArgs e)
        {
            percentageLabel.Text = trackBar1.Value + "%";
        }
    }
}
