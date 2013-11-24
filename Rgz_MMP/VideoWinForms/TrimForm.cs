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
        public TrimForm(string inputPath, string outputPath)
        {
            InitializeComponent();
            _inputPath = inputPath;
            _outputPath = outputPath;
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
